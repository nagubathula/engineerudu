import Link from 'next/link';
import { Code2, ExternalLink, GitPullRequest, Star } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: "Engineerudu Portal",
    description: "The core platform for Engineerudu. Help us build new features, improve the UI, and fix bugs in our Next.js and Tailwind CSS codebase.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    stars: 120,
    forks: 35,
    repoLink: "https://github.com/engineerudu/portal",
    liveLink: "https://engineerudu.org"
  },
  {
    id: 2,
    name: "Telugu Tech Dictionary",
    description: "An open-source dictionary translating complex technical jargon into accessible Telugu terminology. Great for beginner contributors.",
    techStack: ["React", "Node.js", "MongoDB"],
    stars: 85,
    forks: 42,
    repoLink: "https://github.com/engineerudu/tech-dictionary",
    liveLink: "https://dictionary.engineerudu.org"
  },
  {
    id: 3,
    name: "Student Portfolio Template",
    description: "A customizable, open-source portfolio template designed specifically for engineering students to showcase their work.",
    techStack: ["HTML", "CSS", "JavaScript", "Vite"],
    stars: 210,
    forks: 89,
    repoLink: "https://github.com/engineerudu/portfolio-template",
    liveLink: "https://portfolio.engineerudu.org"
  }
];

export default function ProjectsPage() {
  return (
    <main className="w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center">
      <div className="w-full max-w-3xl text-center mb-20 animate-fade-rise">
        <h1 
          className="text-5xl md:text-7xl mb-6 tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
        >
          Open Source Projects
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          The best way to learn is by doing. Contribute to our open-source initiatives and build a strong portfolio that industry recruiters look for.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full animate-fade-rise-delay">
        {projects.map((project) => (
          <div key={project.id} className="liquid-glass rounded-3xl p-8 flex flex-col hover:bg-white/[0.03] transition-all hover:-translate-y-1">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-foreground" />
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5" /> {project.stars}</span>
                <span className="flex items-center gap-1"><GitPullRequest className="w-3.5 h-3.5" /> {project.forks}</span>
              </div>
            </div>
            
            <h3 className="text-xl font-medium mb-3 text-foreground">{project.name}</h3>
            <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map(tech => (
                <span key={tech} className="px-2.5 py-1 text-[11px] uppercase tracking-wider rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-3 mt-auto">
              <a 
                href={project.repoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-foreground text-sm font-medium transition-colors text-center flex items-center justify-center gap-2"
              >
                Contribute <Code2 className="w-4 h-4" />
              </a>
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-[44px] rounded-xl border border-white/10 hover:bg-white/5 flex items-center justify-center transition-colors text-muted-foreground hover:text-foreground"
                title="View Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
