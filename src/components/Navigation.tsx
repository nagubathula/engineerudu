import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-row items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
      <Link 
        href="/" 
        className="text-3xl tracking-tight text-brand-gradient font-bold hover:opacity-90 transition-opacity" 
        style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
      >
        Engineerudu
      </Link>

      <div className="hidden md:flex flex-row items-center space-x-8 bg-background/20 backdrop-blur-md px-6 py-2 rounded-full border border-brand/10">
        <Link href="/" className="text-sm text-foreground hover:text-brand-light transition-colors">Home</Link>
        <Link href="/courses" className="text-sm text-muted-foreground hover:text-brand-light transition-colors">Courses</Link>
        <Link href="/projects" className="text-sm text-muted-foreground hover:text-brand-light transition-colors">Projects</Link>
      </div>

      <a 
        href="https://github.com/engineerudu" 
        target="_blank" 
        rel="noopener noreferrer"
        className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform border border-brand/20 hover:border-brand-light/40 hover:text-brand-light"
      >
        GitHub
      </a>
    </nav>
  );
}
