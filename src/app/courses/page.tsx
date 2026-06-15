import Link from 'next/link';
import { PlayCircle, Clock, BookOpen, Code, Database } from 'lucide-react';
import { coursesData } from '@/lib/coursesData';

function getCourseIcon(id: number) {
  switch (id) {
    case 1: return <Code className="w-6 h-6 text-brand-light" />;
    case 2: return <BookOpen className="w-6 h-6 text-brand-light" />;
    case 3: return <PlayCircle className="w-6 h-6 text-brand-light" />;
    default: return <Database className="w-6 h-6 text-brand-light" />;
  }
}

export default function CoursesPage() {
  return (
    <main className="w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center">
      <div className="w-full max-w-3xl text-center mb-20 animate-fade-rise">
        <h1 
          className="text-5xl md:text-7xl mb-6 tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-display), 'Instrument Serif', serif" }}
        >
          Free Upskilling Courses
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Industry-relevant curriculum designed to bridge the gap between your college syllabus and real-world tech requirements. 
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full animate-fade-rise-delay">
        {coursesData.map((course) => (
          <div key={course.id} className="liquid-glass rounded-3xl p-8 flex flex-col hover:bg-white/[0.03] transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-6">
              {getCourseIcon(course.id)}
            </div>
            
            <h3 className="text-xl font-medium mb-3 text-foreground">{course.title}</h3>
            <p className="text-muted-foreground text-sm mb-8 flex-grow leading-relaxed">
              {course.description}
            </p>
            
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-8">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {course.duration}
              </span>
              <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">
                {course.level}
              </span>
              <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">
                {course.modules.length} Modules
              </span>
            </div>
            
            <Link 
              href={`/courses/${course.id}`}
              className="w-full py-3 rounded-full bg-brand/10 border border-brand/30 hover:bg-brand/20 hover:border-brand-light/50 hover:text-brand-light text-foreground text-sm font-medium transition-colors text-center block"
            >
              Start Learning
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
