import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-extrabold text-sm">JMU</span>
            </div>
          </Link>
          <h1 className="text-3xl font-extrabold text-foreground mb-2">Welcome back</h1>
          <p className="text-muted-foreground">Sign in to access the JMU Blockchain community</p>
        </div>
        <SignIn
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "bg-card border border-border shadow-xl rounded-[20px]",
              formButtonPrimary: "bg-primary hover:bg-primary/90",
            },
          }}
        />
      </div>
    </main>
  );
}
