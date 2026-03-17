"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ComposeFormProps {
  onPost?: (content: string) => void;
}

export function ComposeForm({ onPost }: ComposeFormProps) {
  const { user } = useUser();
  const [content, setContent] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsPosting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    onPost?.(content);
    setContent("");
    setIsPosting(false);
  };

  const maxLength = 500;
  const remainingChars = maxLength - content.length;

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-card border border-border rounded-[20px]">
      <div className="flex gap-4">
        <Avatar className="h-12 w-12 border-2 border-primary/20">
          <AvatarImage src={user?.imageUrl} alt={user?.fullName || "User"} />
          <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold">
            {getInitials(user?.fullName || "U")}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <Textarea
            placeholder="Share something with the community..."
            value={content}
            onChange={(e) => setContent(e.target.value.slice(0, maxLength))}
            className="min-h-[100px] bg-transparent border-0 resize-none text-foreground placeholder:text-muted-foreground focus-visible:ring-0 p-0 text-base leading-relaxed"
          />

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <span
              className={`text-sm font-medium ${
                remainingChars < 50
                  ? remainingChars < 0
                    ? "text-destructive"
                    : "text-accent"
                  : "text-muted-foreground"
              }`}
            >
              {remainingChars}
            </span>

            <Button
              type="submit"
              disabled={!content.trim() || isPosting}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-extrabold rounded-full px-6"
            >
              {isPosting ? "Posting..." : "Post"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
