import Link from "next/link"
import { Header } from "@/components/header"
import { Globe, Shield, Gem, GraduationCap, Briefcase, Users } from "lucide-react"

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
  { name: "Charles Monfort", role: "President & Founder", initials: "P", bio: "Leading the club's vision and strategic direction.", isPresident: true },
  { name: "Erik Anderson", role: "Vice President", initials: "VP", bio: "Supporting operations and member engagement." },
  { name: "Owen Winters", role: "Treasurer", initials: "T", bio: "Managing club finances and budget allocation." },
]

const analysts = [
  { name: "Robbie Karas", role: "Secretary", initials: "S", bio: "Handling communications and meeting documentation." },
  { name: "Connor Adams", role: "News Analyst", initials: "NA", bio: "Curating blockchain news and industry updates." },
  { name: "Lucas Johnson", role: "Market Analyst", initials: "MA", bio: "Providing market insights and trend analysis." },
  { name: "Sean Hallett", role: "Professional Relations", initials: "PR", bio: "Building industry partnerships and speaker connections." },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="py-32">
        <div className="max-w-[1250px] mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-extrabold tracking-[2px] text-sm mb-4 block">
              EST. 2026
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-[-2px]">
              About JMU <span className="gradient-text">Blockchain</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A technical and ethical deep-dive into decentralized systems, bridging the gap between student curiosity and industry reality.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-[1250px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-extrabold uppercase tracking-[4px] text-xs mb-4 block">
                Our Mission
              </span>
              <h2 className="text-4xl font-extrabold text-foreground mb-6 tracking-[-1px]">Unlocking the Ledger</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Blockchain technology is reshaping industries from finance to healthcare, supply chain to digital identity. We believe every JMU student should have the opportunity to understand and participate in this transformation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through workshops, guest speakers, hands-on projects, and community building, we prepare students to be leaders in the decentralized future.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-secondary rounded-[20px] border border-border text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-extrabold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground font-medium mt-1">Active Members</div>
              </div>
              <div className="p-8 bg-secondary rounded-[20px] border border-border text-center">
                <GraduationCap className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-extrabold text-foreground">20+</div>
                <div className="text-sm text-muted-foreground font-medium mt-1">Workshops Held</div>
              </div>
              <div className="p-8 bg-secondary rounded-[20px] border border-border text-center">
                <Briefcase className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-extrabold text-foreground">10+</div>
                <div className="text-sm text-muted-foreground font-medium mt-1">Industry Partners</div>
              </div>
              <div className="p-8 bg-secondary rounded-[20px] border border-border text-center">
                <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-extrabold text-foreground">5+</div>
                <div className="text-sm text-muted-foreground font-medium mt-1">Projects Built</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20">
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
                className="bg-card p-12 rounded-[40px] border border-border hover:-translate-y-3 hover:border-primary hover:shadow-2xl hover:shadow-black/[0.04] transition-all duration-400 text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <pillar.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-extrabold text-foreground mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            ))}
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
                  className={`bg-white/[0.02] p-10 rounded-[40px] border transition-all duration-400 hover:-translate-y-2.5 hover:border-accent hover:bg-white/[0.05] ${
                    member.isPresident 
                      ? 'border-2 border-accent shadow-[0_0_40px_rgba(203,182,119,0.1)]' 
                      : 'border-white/[0.08]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <span className="font-extrabold text-xl text-white">{member.initials}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-extrabold mb-1">{member.name}</h4>
                      <p className="text-accent font-bold text-sm uppercase mb-2">{member.role}</p>
                      <p className="text-white/60 text-sm leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Row - Analysts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {analysts.map((member) => (
              <Link 
                key={member.name}
                href={`/profile/${member.name.toLowerCase().replace(' ', '-')}`}
                className="block"
              >
                <div className="text-center bg-white/[0.02] p-8 rounded-[30px] border border-white/[0.08] transition-all duration-400 hover:-translate-y-2.5 hover:border-accent hover:bg-white/[0.05]">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                    <span className="font-extrabold text-lg text-white">{member.initials}</span>
                  </div>
                  <h4 className="font-extrabold mb-1">{member.name}</h4>
                  <p className="text-accent font-bold text-xs uppercase">{member.role}</p>
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
