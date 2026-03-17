"use client";

import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Post {
  id: string;
  content: string;
  author: {
    id: string;
    name: string;
    username: string;
    imageUrl: string;
  };
  likes: number;
  comments: number;
  createdAt: string;
  isLiked?: boolean;
}

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "just now";
    if (diffMins < 60) return `${diffMins}m`;
    if (diffHours < 24) return `${diffHours}h`;
    if (diffDays < 7) return `${diffDays}d`;
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <article className="p-6 bg-card border border-border rounded-[20px] hover:border-primary/30 hover:shadow-lg hover:shadow-black/[0.02] transition-all duration-300">
      <div className="flex gap-4">
        <Link href={`/profile/${post.author.username}`}>
          <Avatar className="h-12 w-12 border-2 border-primary/20">
            <AvatarImage src={post.author.imageUrl} alt={post.author.name} />
            <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold">
              {getInitials(post.author.name)}
            </AvatarFallback>
          </Avatar>
        </Link>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Link
              href={`/profile/${post.author.username}`}
              className="font-bold text-foreground hover:text-primary transition-colors"
            >
              {post.author.name}
            </Link>
            <span className="text-muted-foreground text-sm">@{post.author.username}</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground text-sm">{formatDate(post.createdAt)}</span>
          </div>

          <p className="text-foreground leading-relaxed whitespace-pre-wrap break-words mb-4">
            {post.content}
          </p>

          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "text-muted-foreground hover:text-primary hover:bg-primary/10 gap-2 h-8 px-2 rounded-full",
                isLiked && "text-primary"
              )}
              onClick={handleLike}
            >
              <Heart className={cn("h-4 w-4", isLiked && "fill-current")} />
              <span className="text-sm font-medium">{likes > 0 ? likes : ""}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary hover:bg-primary/10 gap-2 h-8 px-2 rounded-full"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm font-medium">{post.comments > 0 ? post.comments : ""}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary hover:bg-primary/10 h-8 px-2 rounded-full"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
