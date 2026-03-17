"use client";

import { use, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PostCard, type Post } from "@/components/post-card";
import { CalendarDays, Link as LinkIcon, MapPin, Settings } from "lucide-react";
import Link from "next/link";

// Sample user data and posts for demonstration
const sampleProfiles: Record<
  string,
  {
    name: string;
    username: string;
    imageUrl: string;
    bio: string;
    location: string;
    website: string;
    joinedDate: string;
    followers: number;
    following: number;
    posts: Post[];
  }
> = {
  alexc: {
    name: "Alex Chen",
    username: "alexc",
    imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=alex",
    bio: "Full-stack developer passionate about building products that matter. Coffee enthusiast. Open source contributor.",
    location: "San Francisco, CA",
    website: "alexchen.dev",
    joinedDate: "March 2024",
    followers: 1248,
    following: 543,
    posts: [
      {
        id: "p1",
        content:
          "Just shipped a new feature that I've been working on for weeks. The feeling of seeing your code in production never gets old. What's everyone working on today?",
        author: {
          id: "user1",
          name: "Alex Chen",
          username: "alexc",
          imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=alex",
        },
        likes: 24,
        comments: 5,
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      },
    ],
  },
  mayaj: {
    name: "Maya Johnson",
    username: "mayaj",
    imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=maya",
    bio: "Software architect. Writing about system design, distributed systems, and engineering leadership.",
    location: "New York, NY",
    website: "mayajohnson.io",
    joinedDate: "January 2024",
    followers: 5892,
    following: 234,
    posts: [
      {
        id: "p2",
        content:
          "The best code is no code at all. Every line you write is a line that needs to be maintained, debugged, and understood by the next developer.\n\nSimplicity is the ultimate sophistication.",
        author: {
          id: "user2",
          name: "Maya Johnson",
          username: "mayaj",
          imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=maya",
        },
        likes: 89,
        comments: 12,
        createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      },
    ],
  },
};

export default function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = use(params);
  const { user: currentUser } = useUser();
  const [isFollowing, setIsFollowing] = useState(false);

  const isOwnProfile =
    currentUser?.username === username || currentUser?.id === username;

  // Get profile data - use current user's data if it's their profile, otherwise use sample data
  const profile = isOwnProfile
    ? {
        name: currentUser?.fullName || "Your Name",
        username: currentUser?.username || username,
        imageUrl: currentUser?.imageUrl || "",
        bio: "Your bio goes here. Edit your profile to add one.",
        location: "",
        website: "",
        joinedDate: currentUser?.createdAt
          ? new Date(currentUser.createdAt).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })
          : "Recently",
        followers: 0,
        following: 0,
        posts: [],
      }
    : sampleProfiles[username] || {
        name: username,
        username: username,
        imageUrl: `https://api.dicebear.com/9.x/avataaars/svg?seed=${username}`,
        bio: "",
        location: "",
        website: "",
        joinedDate: "Recently",
        followers: 0,
        following: 0,
        posts: [],
      };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="mb-8">
        <div className="flex items-start gap-6 mb-6">
          <Avatar className="h-24 w-24 border-2 border-border">
            <AvatarImage src={profile.imageUrl} alt={profile.name} />
            <AvatarFallback className="bg-secondary text-secondary-foreground text-2xl">
              {getInitials(profile.name)}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  {profile.name}
                </h1>
                <p className="text-muted-foreground">@{profile.username}</p>
              </div>

              {isOwnProfile ? (
                <Link href="/profile/settings">
                  <Button
                    variant="outline"
                    className="border-border hover:bg-secondary"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Edit profile
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={() => setIsFollowing(!isFollowing)}
                  className={
                    isFollowing
                      ? "bg-secondary text-secondary-foreground hover:bg-destructive hover:text-destructive-foreground"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }
                >
                  {isFollowing ? "Following" : "Follow"}
                </Button>
              )}
            </div>
          </div>
        </div>

        {profile.bio && (
          <p className="text-foreground leading-relaxed mb-4">{profile.bio}</p>
        )}

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
          {profile.location && (
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </span>
          )}
          {profile.website && (
            <a
              href={`https://${profile.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-primary hover:underline"
            >
              <LinkIcon className="h-4 w-4" />
              {profile.website}
            </a>
          )}
          <span className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            Joined {profile.joinedDate}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <button className="hover:underline">
            <span className="font-semibold text-foreground">
              {formatNumber(profile.following)}
            </span>{" "}
            <span className="text-muted-foreground">Following</span>
          </button>
          <button className="hover:underline">
            <span className="font-semibold text-foreground">
              {formatNumber(profile.followers)}
            </span>{" "}
            <span className="text-muted-foreground">Followers</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent p-0 h-auto">
          <TabsTrigger
            value="posts"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
          >
            Posts
          </TabsTrigger>
          <TabsTrigger
            value="likes"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
          >
            Likes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="mt-6">
          {profile.posts.length > 0 ? (
            <div className="space-y-4">
              {profile.posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts yet</p>
              {isOwnProfile && (
                <p className="text-sm text-muted-foreground mt-2">
                  Share your first thought with the community!
                </p>
              )}
            </div>
          )}
        </TabsContent>

        <TabsContent value="likes" className="mt-6">
          <div className="text-center py-12">
            <p className="text-muted-foreground">No liked posts yet</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
