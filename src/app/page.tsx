import Link from 'next/link';
import { ArrowRight, Code, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
      {/* Hero Content */}
      <section className="flex flex-col items-center justify-center text-center pt-24 pb-32 min-h-[80vh]">
        <div className="inline-block liquid-glass rounded-full px-4 py-1.5 mb-8 animate-fade-rise">
          <span className="text-xs font-medium uppercase tracking-widest text-primary/80">
            Welcome to Engineerudu
          </span>
        </div>
        
        <h1 
          className="text-5xl sm:text-7xl md:text-8xl leading-[1.05] tracking-[-2px] max-w-5xl font-normal text-foreground animate-fade-rise-delay" 
          style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
        >
          Bridging the gap between <br className="hidden sm:block" />
          <em className="not-italic text-muted-foreground">academia and industry.</em>
        </h1>
        
        <p className="text-muted-foreground text-base sm:text-xl max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay-2">
          Upskilling students in engineering and open source. 
          Founded by Nagubathula Satya Sai to bring real-world skills to the classroom.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 animate-fade-rise-delay-2">
          <Link href="/courses" className="liquid-glass rounded-full px-10 py-4 text-base text-foreground hover:scale-[1.03] transition-transform flex items-center gap-2">
            Start Learning <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/projects" className="rounded-full px-10 py-4 text-base text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all">
            Explore Projects
          </Link>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="w-full py-24 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Courses Card */}
          <div className="liquid-glass rounded-3xl p-10 flex flex-col items-start text-left hover:bg-white/[0.02] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-foreground" />
            </div>
            <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>
              Free Courses
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Access high-quality, industry-relevant courses in Telugu and English. Learn full-stack development, cloud architecture, and more without any cost.
            </p>
            <Link href="/courses" className="mt-auto text-sm font-medium uppercase tracking-wider hover:text-primary/80 transition-colors flex items-center gap-2">
              View all courses <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Projects Card */}
          <div className="liquid-glass rounded-3xl p-10 flex flex-col items-start text-left hover:bg-white/[0.02] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <Code className="w-6 h-6 text-foreground" />
            </div>
            <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>
              Open Source
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Get hands-on experience by contributing to real-world open source projects. Build your portfolio while learning best practices.
            </p>
            <Link href="/projects" className="mt-auto text-sm font-medium uppercase tracking-wider hover:text-primary/80 transition-colors flex items-center gap-2">
              Start contributing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
