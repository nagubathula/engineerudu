import Link from 'next/link';
import { ArrowRight, Code, BookOpen, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <main className="w-full relative overflow-hidden flex flex-col items-center min-h-screen">
      
      {/* Dynamic Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/20 blur-[120px] rounded-[100%] pointer-events-none -z-10" />
      <div className="absolute top-60 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Hero Content */}
        <section className="flex flex-col items-center justify-center text-center pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-[85vh] relative z-10">
          
          <div className="inline-flex items-center gap-2 liquid-glass rounded-full px-5 py-2 mb-8 animate-fade-rise border border-brand/20 shadow-xl shadow-brand/5 hover:scale-105 transition-transform cursor-default">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-600">
              First Telugu Open Source & Engineering Org
            </span>
          </div>
          
          <h1 
            className="text-6xl sm:text-7xl md:text-[5.5rem] leading-[1.05] tracking-tight max-w-5xl font-extrabold text-zinc-900 animate-fade-rise-delay relative" 
            style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
          >
            Building the future of <br className="hidden sm:block" />
            <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-brand via-green-500 to-brand-light font-bold">Telugu engineering.</em>
          </h1>
          
          <p className="text-zinc-500 text-lg sm:text-2xl max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay-2 font-medium">
            The first Telugu open source and engineering organization. 
            We are a community dedicated to building real-world projects and fostering engineering excellence.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 animate-fade-rise-delay-2">
            <Link href="/projects" className="rounded-full px-10 py-4 text-base font-bold bg-brand text-black hover:bg-brand-light hover:scale-[1.03] transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(var(--brand-color),0.4)]">
              Start Contributing <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/courses" className="liquid-glass rounded-full px-10 py-4 text-base font-bold text-zinc-700 hover:text-black transition-all border border-zinc-200 shadow-md hover:shadow-xl hover:border-brand/40">
              Explore Resources
            </Link>
          </div>

          <div className="mt-16 flex items-center gap-4 text-sm font-semibold text-zinc-500 animate-fade-rise-delay-2">
            <div className="flex -space-x-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-zinc-200" />
              ))}
            </div>
            <p>Supported by the Telugu engineering community</p>
          </div>
        </section>

        {/* Popular Technologies Banner */}
        <section className="w-full py-12 border-y border-zinc-200/50 mb-24 flex flex-col items-center">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8">Master the Modern Stack</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-black text-zinc-800 tracking-tight">React</span>
            <span className="text-xl font-black text-zinc-800 tracking-tight">Next.js</span>
            <span className="text-xl font-black text-zinc-800 tracking-tight">TypeScript</span>
            <span className="text-xl font-black text-zinc-800 tracking-tight">PostgreSQL</span>
            <span className="text-xl font-black text-zinc-800 tracking-tight">Python</span>
            <span className="text-xl font-black text-zinc-800 tracking-tight">AWS</span>
          </div>
        </section>

        {/* Bento Box Features Section */}
        <section className="w-full py-16 flex flex-col gap-16 relative z-10">
          <div className="text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4" style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>
              Why Engineerudu?
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl">Everything you need to build, contribute, and grow as an engineer.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Bento Item 1 - Large Left */}
            <div className="md:col-span-2 liquid-glass rounded-[2rem] p-10 flex flex-col items-start border border-zinc-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group overflow-hidden relative">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand/10 rounded-full blur-[40px] group-hover:bg-brand/20 transition-all duration-500" />
              <div className="w-14 h-14 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform relative z-10">
                <BookOpen className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-3xl font-extrabold text-zinc-900 mb-3 tracking-tight relative z-10">Engineering Resources</h3>
              <p className="text-zinc-500 text-lg leading-relaxed max-w-md relative z-10">
                Access high-quality engineering documentation and guides in both Telugu and English. From core fundamentals to advanced system architecture.
              </p>
            </div>

            {/* Bento Item 2 - Top Right */}
            <div className="liquid-glass rounded-[2rem] p-10 flex flex-col items-start border border-zinc-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform relative z-10">
                <Code className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-2xl font-extrabold text-zinc-900 mb-3 tracking-tight relative z-10">Open Source Projects</h3>
              <p className="text-zinc-500 text-base leading-relaxed relative z-10">
                Collaborate on real-world open-source projects. Build your portfolio by contributing to meaningful software.
              </p>
            </div>

            {/* Bento Item 3 - Bottom Left */}
            <div className="liquid-glass rounded-[2rem] p-10 flex flex-col items-start border border-zinc-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform relative z-10">
                <Users className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-2xl font-extrabold text-zinc-900 mb-3 tracking-tight relative z-10">Community Driven</h3>
              <p className="text-zinc-500 text-base leading-relaxed relative z-10">
                Build alongside ambitious peers. Get your code reviewed and network with passionate engineers in the ecosystem.
              </p>
            </div>

            {/* Bento Item 4 - Bottom Right */}
            <div className="md:col-span-2 liquid-glass rounded-[2rem] p-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 border border-zinc-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group bg-gradient-to-br from-white/40 to-brand/5 relative overflow-hidden">
              <div className="w-16 h-16 rounded-3xl bg-brand/20 border border-brand/30 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform flex-shrink-0 relative z-10">
                <Zap className="w-8 h-8 text-brand" />
              </div>
              <div className="flex flex-col text-center sm:text-left relative z-10">
                <h3 className="text-3xl font-extrabold text-zinc-900 mb-3 tracking-tight">Completely Open.</h3>
                <p className="text-zinc-500 text-lg leading-relaxed">
                  Knowledge and collaboration shouldn't have a paywall. Everything built by Engineerudu is entirely open-source and free, forever.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-32 flex flex-col items-center text-center relative z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand/10 blur-[100px] rounded-full pointer-events-none -z-10" />
          <h2 className="text-5xl md:text-7xl font-extrabold text-zinc-900 tracking-tight mb-6" style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>
            Ready to make an impact?
          </h2>
          <p className="text-zinc-500 text-xl max-w-xl mb-12">
            Join the fastest-growing Telugu open source and engineering community today.
          </p>
          <Link href="/projects" className="rounded-full px-12 py-5 text-lg font-extrabold bg-zinc-900 text-white hover:bg-brand hover:text-black hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(var(--brand-color),0.5)] transition-all flex items-center gap-3">
            Start Contributing <ArrowRight className="w-5 h-5" />
          </Link>
        </section>

      </div>
    </main>
  );
}
