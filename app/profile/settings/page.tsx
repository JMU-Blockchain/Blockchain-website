import { UserProfile } from "@clerk/nextjs";
import { Header } from "@/components/header";

export default function ProfileSettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-1">Settings</h1>
            <p className="text-muted-foreground">Manage your account and profile</p>
          </div>
          
          <UserProfile
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "bg-card border border-border shadow-none w-full",
                navbar: "hidden",
                pageScrollBox: "p-0",
              },
            }}
          />
        </div>
      </main>
    </div>
  );
}
