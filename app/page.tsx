"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut } from "@clerk/nextjs"
import { Header } from "@/components/header"
import { Globe, Shield, Gem, GraduationCap, Briefcase } from "lucide-react"

const pillars = [
  {
    icon: Globe,
    title: "Decentralization",
    description: "Shifting power from central entities to a distributed network where every node has a voice.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Utilizing high-level cryptography to ensure data integrity and user safety across the ledger.",
  },
  {
    icon: Gem,
    title: "Transparency",
    description: "An immutable, public record where every single transaction is verifiable by the community.",
  },
]

const executiveBoard = [
  { name: "Charles Monfort", role: "President & Founder", initials: "P", isPresident: true },
  { name: "Erik Anderson", role: "Vice President", initials: "VP" },
  { name: "Owen Winters", role: "Treasurer", initials: "T" },
]

const analysts = [
  { name: "Robbie Karas", role: "Secretary", initials: "S" },
  { name: "Connor Adams", role: "News Analyst", initials: "NA" },
  { name: "Lucas Johnson", role: "Market Analyst", initials: "MA" },
  { name: "Sean Hallett", role: "Professional Relations", initials: "PR" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="py-40 bg-gradient-to-tr from-primary/[0.02] to-transparent">
        <div className="max-w-[1250px] mx-auto px-8">
          <div className="animate-fade-in-up">
            <span className="text-primary font-extrabold tracking-[2px] text-sm mb-4 block">
              EST. 2026
            </span>
            <h1 className="text-[clamp(3.5rem,8vw,6.5rem)] font-extrabold tracking-[-4px] leading-[0.85] mb-8">
              Unlocking the <span className="gradient-text">Ledger.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-[650px] mb-12 leading-relaxed">
              A technical and ethical deep-dive into decentralized systems, bridging the gap between student curiosity and industry reality.
            </p>
            <div className="flex flex-wrap gap-5">
              <SignedOut>
                <Button 
                  asChild 
                  className="bg-foreground text-background px-10 py-6 rounded-xl font-extrabold text-sm hover:-translate-y-1 transition-transform"
                >
                  <Link href="#pillars">View Pillars</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline"
                  className="border-2 border-border text-foreground px-10 py-6 rounded-xl font-extrabold text-sm hover:-translate-y-1 transition-transform"
                >
                  <Link href="/feed">Our Community</Link>
                </Button>
              </SignedOut>
              <SignedIn>
                <Button 
                  asChild 
                  className="bg-foreground text-background px-10 py-6 rounded-xl font-extrabold text-sm hover:-translate-y-1 transition-transform"
                >
                  <Link href="/feed">Enter Community</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline"
                  className="border-2 border-border text-foreground px-10 py-6 rounded-xl font-extrabold text-sm hover:-translate-y-1 transition-transform"
                >
                  <Link href="#pillars">View Pillars</Link>
                </Button>
              </SignedIn>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section id="pillars" className="py-20">
        <div className="max-w-[1250px] mx-auto px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-extrabold uppercase tracking-[4px] text-xs mb-2 block">
              The Foundation
            </span>
            <h2 className="text-4xl font-extrabold text-foreground">The Three Pillars</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {pillars.map((pillar) => (
              <div 
                key={pillar.title} 
                className="bg-card p-16 px-12 rounded-[40px] border border-border hover:-translate-y-3 hover:border-primary hover:shadow-2xl hover:shadow-black/[0.04] transition-all duration-400"
              >
                <pillar.icon className="w-14 h-14 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-extrabold text-foreground mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Professional Section */}
      <section className="py-20">
        <div className="max-w-[1250px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-16 rounded-[40px] bg-secondary border border-border">
              <span className="text-accent font-extrabold uppercase text-xs tracking-[2px] mb-6 block">
                Education
              </span>
              <h3 className="text-3xl font-extrabold text-foreground mb-4">Academic Literacy</h3>
              <p className="text-muted-foreground leading-relaxed">
                We provide workshops and curated resources to ensure Madison students understand the engine behind the currency.
              </p>
            </div>
            <div className="p-16 rounded-[40px] bg-[#0a0a0c] text-white">
              <span className="text-accent font-extrabold uppercase text-xs tracking-[2px] mb-6 block">
                Professional
              </span>
              <h3 className="text-3xl font-extrabold mb-4">Industry Readiness</h3>
              <p className="text-white/70 leading-relaxed">
                Connecting students to the global ecosystem through networking, guest speakers, and project builds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Board Section */}
      <section className="py-20 mt-10 bg-[#0a0a0c] text-white rounded-t-[60px]">
        <div className="max-w-[1250px] mx-auto px-8">
          <div className="text-center mb-14">
            <span className="text-accent font-extrabold uppercase tracking-[4px] text-xs mb-2 block">
              The Executive Board
            </span>
            <h2 className="text-4xl font-extrabold">Leadership Team</h2>
          </div>
          
          {/* Top Row - President, VP, Treasurer */}
          <div className="grid md:grid-cols-3 gap-10 mt-14">
            {executiveBoard.map((member) => (
              <Link 
                key={member.name}
                href={`/profile/${member.name.toLowerCase().replace(' ', '-')}`}
                className="block"
              >
                <div 
                  className={`text-center bg-white/[0.02] p-16 px-8 rounded-[40px] border transition-all duration-400 hover:-translate-y-2.5 hover:border-accent hover:bg-white/[0.05] ${
                    member.isPresident 
                      ? 'border-2 border-accent shadow-[0_0_40px_rgba(203,182,119,0.1)]' 
                      : 'border-white/[0.08]'
                  }`}
                >
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-6 flex items-center justify-center">
                    <span className="font-extrabold text-2xl text-white">{member.initials}</span>
                  </div>
                  <h4 className="text-lg font-extrabold mb-1">{member.name}</h4>
                  <p className="text-accent font-bold text-sm uppercase mt-2">{member.role}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Row - Analysts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-12">
            {analysts.map((member) => (
              <Link 
                key={member.name}
                href={`/profile/${member.name.toLowerCase().replace(' ', '-')}`}
                className="block"
              >
                <div className="text-center bg-white/[0.02] p-16 px-8 rounded-[40px] border border-white/[0.08] transition-all duration-400 hover:-translate-y-2.5 hover:border-accent hover:bg-white/[0.05]">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-6 flex items-center justify-center">
                    <span className="font-extrabold text-2xl text-white">{member.initials}</span>
                  </div>
                  <h4 className="text-lg font-extrabold mb-1">{member.name}</h4>
                  <p className="text-accent font-bold text-sm uppercase mt-2">{member.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center text-sm text-muted-foreground border-t border-border">
        <div className="max-w-[1250px] mx-auto px-8">
          &copy; {new Date().getFullYear()} JMU Blockchain Club. Designed by Charles Monfort.
        </div>
      </footer>
    </div>
  )
}
