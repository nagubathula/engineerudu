import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-zinc-200/50 shadow-sm transition-all duration-300">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-4 flex flex-row items-center justify-between">
        <Link 
          href="/" 
          className="text-3xl tracking-tight text-brand-gradient font-bold hover:opacity-90 transition-opacity" 
          style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
        >
          Engineerudu
        </Link>

        <div className="hidden md:flex flex-row items-center space-x-8 bg-zinc-100/50 px-6 py-2 rounded-full border border-zinc-200 shadow-inner">
          <Link href="/" className="text-sm font-semibold text-zinc-600 hover:text-brand transition-colors">Home</Link>
          <Link href="/courses" className="text-sm font-semibold text-zinc-600 hover:text-brand transition-colors">Courses</Link>
          <Link href="/projects" className="text-sm font-semibold text-zinc-600 hover:text-brand transition-colors">Projects</Link>
        </div>

        <a 
          href="https://github.com/engineerudu" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white/80 rounded-full px-6 py-2 text-sm font-bold text-zinc-800 hover:scale-[1.03] transition-transform border border-zinc-200 shadow-sm hover:border-brand/40 hover:text-brand"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
