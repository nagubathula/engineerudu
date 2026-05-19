import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" type="video/mp4" />
      </video>

      {/* Navigation */}
      <nav className="relative z-10 flex flex-row items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <Link 
          href="/" 
          className="text-3xl tracking-tight text-foreground" 
          style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
        >
          Velorah<sup className="text-xs">®</sup>
        </Link>

        <div className="hidden md:flex flex-row items-center space-x-8">
          <Link href="/" className="text-sm text-foreground transition-colors">Home</Link>
          <Link href="/studio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Studio</Link>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
          <Link href="/journal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Journal</Link>
          <Link href="/reach-us" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Reach Us</Link>
        </div>

        <button className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform">
          Begin Journey
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 min-h-[calc(100vh-100px)]">
        <h1 
          className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-foreground animate-fade-rise" 
          style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
        >
          Where <em className="not-italic text-muted-foreground">dreams</em> rise <br className="hidden sm:block" />
          <em className="not-italic text-muted-foreground">through the silence.</em>
        </h1>
        
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
          We're designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we build digital spaces for sharp focus and inspired work.
        </p>

        <button className="liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12 hover:scale-[1.03] cursor-pointer animate-fade-rise-delay-2 transition-transform">
          Begin Journey
        </button>
      </div>
    </main>
  );
}
