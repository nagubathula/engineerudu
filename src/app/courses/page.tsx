import Link from 'next/link';
import { PlayCircle, Clock, BookOpen, Code } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Fullstack Web Development in Telugu",
    description: "Learn modern web development from scratch using React, Next.js, and Node.js. Taught entirely in Telugu for easy understanding.",
    duration: "40 hours",
    level: "Beginner",
    modules: 12,
    icon: <Code className="w-6 h-6 text-primary" />
  },
  {
    id: 2,
    title: "Mastering Open Source Contributions",
    description: "A complete guide on how to find, evaluate, and contribute to open source projects on GitHub.",
    duration: "10 hours",
    level: "Intermediate",
    modules: 4,
    icon: <BookOpen className="w-6 h-6 text-primary" />
  },
  {
    id: 3,
    title: "Data Structures & Algorithms",
    description: "Build a strong foundation in problem-solving and algorithmic thinking. Essential for cracking top tech interviews.",
    duration: "60 hours",
    level: "All Levels",
    modules: 15,
    icon: <PlayCircle className="w-6 h-6 text-primary" />
  }
];

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
        {courses.map((course) => (
          <div key={course.id} className="liquid-glass rounded-3xl p-8 flex flex-col hover:bg-white/[0.03] transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              {course.icon}
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
                {course.modules} Modules
              </span>
            </div>
            
            <button className="w-full py-3 rounded-full bg-white/10 hover:bg-white/20 text-foreground text-sm font-medium transition-colors">
              Start Learning
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
