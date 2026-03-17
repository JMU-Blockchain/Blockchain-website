"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { ComposeForm } from "@/components/compose-form";
import { PostCard, type Post } from "@/components/post-card";

// Sample posts focused on blockchain/JMU community
const initialPosts: Post[] = [
  {
    id: "1",
    content:
      "Just finished my first smart contract on Ethereum testnet! The feeling of deploying your own code to the blockchain is incredible. Any other JMU students working on Solidity projects?",
    author: {
      id: "user1",
      name: "Charles Monfort",
      username: "charles",
      imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=charles",
    },
    likes: 24,
    comments: 8,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "2",
    content:
      "Reminder: Our next workshop on DeFi fundamentals is this Thursday at 7pm in the ISAT building. We'll be covering liquidity pools, yield farming, and how to read smart contracts.\n\nBring your laptops - we're going hands-on!",
    author: {
      id: "user2",
      name: "Erik Anderson",
      username: "erik",
      imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=erik",
    },
    likes: 45,
    comments: 12,
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "3",
    content:
      "Great article on Layer 2 scaling solutions - the future of Ethereum is looking bright with rollups. Anyone interested in doing a deep dive session on Optimism vs Arbitrum?",
    author: {
      id: "user3",
      name: "Owen Winters",
      username: "owen",
      imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=owen",
    },
    likes: 67,
    comments: 15,
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "4",
    content:
      "Market update: Bitcoin holding strong above $60k as institutional adoption continues. Remember - this club is about education, not financial advice. DYOR always!",
    author: {
      id: "user4",
      name: "Lucas Johnson",
      username: "lucas",
      imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=lucas",
    },
    likes: 89,
    comments: 23,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "5",
    content:
      "Excited to announce we have a guest speaker from Chainlink coming to campus next month! They'll be discussing oracle networks and how they enable real-world data on blockchain. Stay tuned for more details.",
    author: {
      id: "user5",
      name: "Sean Hallett",
      username: "sean",
      imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=sean",
    },
    likes: 134,
    comments: 28,
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export default function FeedPage() {
  const { user } = useUser();
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const handleNewPost = (content: string) => {
    const newPost: Post = {
      id: `new-${Date.now()}`,
      content,
      author: {
        id: user?.id || "current",
        name: user?.fullName || "You",
        username: user?.username || "user",
        imageUrl: user?.imageUrl || "",
      },
      likes: 0,
      comments: 0,
      createdAt: new Date().toISOString(),
    };

    setPosts([newPost, ...posts]);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-1">Community Feed</h1>
        <p className="text-muted-foreground">Connect with fellow blockchain enthusiasts at JMU</p>
      </div>

      <div className="space-y-4">
        <ComposeForm onPost={handleNewPost} />

        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
