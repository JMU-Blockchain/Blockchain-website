"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/98 backdrop-blur-sm">
      <div className="max-w-[1250px] mx-auto px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="JMU Blockchain Club Logo"
              width={90}
              height={90}
              className="h-[70px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <nav className="flex items-center gap-8">
              <Link 
                href="/" 
                className="text-xs font-extrabold uppercase tracking-[1.5px] text-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/feed" 
                className="text-xs font-extrabold uppercase tracking-[1.5px] text-foreground hover:text-primary transition-colors"
              >
                Community
              </Link>
              <Link 
                href="/about" 
                className="text-xs font-extrabold uppercase tracking-[1.5px] text-foreground hover:text-primary transition-colors"
              >
                Leadership
              </Link>
            </nav>

            {/* Auth Buttons */}
            <SignedOut>
              <Button 
                asChild 
                className="bg-primary text-primary-foreground px-6 py-5 rounded-full font-extrabold text-xs uppercase shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 transition-all"
              >
                <Link href="/sign-up">Join Club</Link>
              </Button>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center gap-4">
                <Button 
                  asChild 
                  className="bg-primary text-primary-foreground px-6 py-5 rounded-full font-extrabold text-xs uppercase shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 transition-all"
                >
                  <Link href="/feed">Community</Link>
                </Button>
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10"
                    }
                  }}
                />
              </div>
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <SignedIn>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8"
                  }
                }}
              />
            </SignedIn>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-6">
            <nav className="flex flex-col gap-4">
              <Link 
                href="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-extrabold uppercase tracking-[1.5px] text-foreground hover:text-primary transition-colors py-2"
              >
                Home
              </Link>
              <Link 
                href="/feed" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-extrabold uppercase tracking-[1.5px] text-foreground hover:text-primary transition-colors py-2"
              >
                Community
              </Link>
              <Link 
                href="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-extrabold uppercase tracking-[1.5px] text-foreground hover:text-primary transition-colors py-2"
              >
                Leadership
              </Link>
              <SignedOut>
                <Link 
                  href="/sign-up" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-extrabold uppercase tracking-[1.5px] text-primary hover:text-primary/80 transition-colors py-2"
                >
                  Join Club
                </Link>
              </SignedOut>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
