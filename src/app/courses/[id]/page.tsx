"use client";

import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  CheckCircle, 
  PlayCircle, 
  FileText, 
  Check, 
  ExternalLink, 
  Loader2,
  Printer,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Eye,
  Type
} from "lucide-react";
import { coursesData, Course, Lesson } from "@/lib/coursesData";

export default function CoursePlayerPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const courseId = Number(resolvedParams.id);
  
  // Find current course
  const course = coursesData.find((c) => c.id === courseId);

  // Core Client Mounting Guard
  const [isClient, setIsClient] = useState(false);
  
  // Active states
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [lessonOverview, setLessonOverview] = useState<string>("");
  
  // Reading Mode Customization
  const [readTheme] = useState<"light">("light");
  const [textSize, setTextSize] = useState<"sm" | "base" | "lg">("lg");
  
  // Lesson Completion Progress State
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});
  


  // Initialize client and states
  useEffect(() => {
    setIsClient(true);
    
    if (course && course.modules.length > 0 && course.modules[0].lessons.length > 0) {
      setActiveLesson(course.modules[0].lessons[0]);
    }
    
    // Load completion progress
    const savedProgress = localStorage.getItem(`engineerudu:progress:${courseId}`);
    if (savedProgress) {
      try {
        setCompletedLessons(JSON.parse(savedProgress));
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
  }, [course, courseId]);

  // Load lesson-specific data (Notes & Overview)
  useEffect(() => {
    if (!activeLesson) return;
    
    // Load overview content (fetch from overviewUrl if present)
    if (activeLesson.overviewUrl) {
      setLessonOverview("Loading lesson content...");
      fetch(activeLesson.overviewUrl)
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP error ${res.status}`);
          return res.text();
        })
        .then((text) => {
          setLessonOverview(text);
        })
        .catch((err) => {
          console.error("Failed to load dynamic lesson content:", err);
          setLessonOverview(activeLesson.overview); // fallback
        });
    } else {
      setLessonOverview(activeLesson.overview);
    }


  }, [activeLesson, courseId]);


  // Toggle checklist lessons
  const toggleLessonCompleted = (lessonId: string, customVal?: boolean) => {
    const newProgress = {
      ...completedLessons,
      [lessonId]: customVal !== undefined ? customVal : !completedLessons[lessonId]
    };
    
    setCompletedLessons(newProgress);
    localStorage.setItem(`engineerudu:progress:${courseId}`, JSON.stringify(newProgress));
  };

  // Extract headings for dynamic TOC
  const tocHeadings = React.useMemo(() => {
    if (!lessonOverview) return [];
    const headings: { id: string, title: string, level: number }[] = [];
    lessonOverview.split("\n\n").forEach((para, i) => {
      const cleanPara = para.trim();
      const firstLine = cleanPara.split("\n")[0];
      if (cleanPara.startsWith("### ")) {
        headings.push({ id: `heading-${i}`, title: firstLine.replace("### ", ""), level: 3 });
      } else if (cleanPara.startsWith("## ")) {
        headings.push({ id: `heading-${i}`, title: firstLine.replace("## ", ""), level: 2 });
      } else if (cleanPara.startsWith("# ")) {
        headings.push({ id: `heading-${i}`, title: firstLine.replace("# ", ""), level: 1 });
      }
    });
    return headings;
  }, [lessonOverview]);

  // Get flat list of lessons for Next/Prev navigation
  const getFlatLessons = () => {
    if (!course) return [];
    return course.modules.flatMap(m => m.lessons);
  };

  const navigateLesson = (direction: "next" | "prev") => {
    const flat = getFlatLessons();
    if (!activeLesson || flat.length === 0) return;
    
    const idx = flat.findIndex(l => l.id === activeLesson.id);
    if (direction === "next" && idx < flat.length - 1) {
      setActiveLesson(flat[idx + 1]);
    } else if (direction === "prev" && idx > 0) {
      setActiveLesson(flat[idx - 1]);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Helper to parse simple markdown formatting (Bold, Code blocks, and Hyperlinks)
  const renderFormattedText = (text: string) => {
    let parts = text.split(/(\*\*.*?\*\*|`.*?`|\[.*?\]\(.*?\))/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index} className="font-bold text-neutral-900 dark:text-zinc-900 sepia-text-bold">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code 
            key={index} 
            className="bg-black/5 dark:bg-zinc-200 px-1.5 py-0.5 rounded font-mono text-[0.9em] border border-black/10 dark:border-zinc-300"
            style={{ color: readTheme === "sepia" ? "#4f3824" : undefined }}
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
      if (linkMatch) {
        return (
          <a key={index} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5">
            {linkMatch[1]} <ExternalLink className="w-3 h-3 inline" />
          </a>
        );
      }
      return part;
    });
  };

  if (!course) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold mb-4">Course Not Found</h2>
        <Link href="/courses" className="liquid-glass px-6 py-2 rounded-full text-foreground">
          Back to Courses
        </Link>
      </div>
    );
  }

  // Calculate Course Progress
  const flatLessonsList = course.modules.flatMap(m => m.lessons);
  const totalLessons = flatLessonsList.length;
  const completedCount = Object.keys(completedLessons).filter(id => completedLessons[id] && flatLessonsList.some(l => l.id === id)).length;
  const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  if (!isClient || !activeLesson) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center text-muted-foreground gap-3">
        <Loader2 className="w-6 h-6 animate-spin text-foreground" />
        <span>Loading your course player...</span>
      </div>
    );
  }

  const flatLessonsListForNav = getFlatLessons();
  const currentIdx = flatLessonsListForNav.findIndex(l => l.id === activeLesson.id);
  const isFirstLesson = currentIdx === 0;
  const isLastLesson = currentIdx === flatLessonsListForNav.length - 1;

  // Theme styling definitions
  const themeClasses = {
    light: "bg-zinc-50 border-zinc-200 text-zinc-850 shadow-md",
    sepia: "bg-[#fbf4e6] border-[#eadfcc] text-[#5c4a3b] shadow-md",
    dark: "bg-zinc-950/70 border-zinc-300 text-zinc-200 shadow-md backdrop-blur-md"
  };

  const textClasses = {
    sm: "text-sm leading-relaxed",
    base: "text-base leading-relaxed lg:text-[17px]",
    lg: "text-lg leading-loose"
  };

  return (
    <main className="w-full max-w-[1600px] mx-auto px-4 md:px-8 pt-32 pb-10 flex flex-col gap-8 animate-fade-rise" id="print-wrapper">
      {/* Print-only CSS overlay */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body { background: white !important; color: black !important; }
          body > *:not(#print-wrapper), #print-wrapper > :not(#main-reading-content), .no-print { display: none !important; }
          #main-reading-content { position: absolute; left: 0; top: 0; width: 100%; background: white !important; color: black !important; padding: 2rem !important; margin: 0 !important; box-shadow: none !important; border: none !important; }
          .sepia-text-bold { color: black !important; }
        }
      `}} />

      {/* Top Header & Breadcrumbs (no-print) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-300 pb-6 no-print">
        <div className="flex items-center gap-5">
          <Link 
            href="/courses" 
            className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-300 hover:border-brand-light/40 hover:bg-brand/10 hover:text-brand-light flex items-center justify-center transition-all text-zinc-700 shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-light/80">
              {course.title}
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-zinc-900 tracking-tight">{activeLesson.title}</h1>
          </div>
        </div>

        {/* Dynamic Lesson Navigation */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigateLesson("prev")}
            disabled={isFirstLesson}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300 bg-zinc-100 text-sm font-semibold hover:border-brand-light/40 hover:text-brand-light hover:bg-brand/10 text-zinc-900 disabled:opacity-30 disabled:hover:bg-zinc-100 disabled:hover:border-zinc-300 disabled:hover:text-zinc-900 disabled:cursor-not-allowed transition-all shadow-md"
          >
            <ChevronLeft className="w-4 h-4" /> Prev
          </button>
          <button
            onClick={() => navigateLesson("next")}
            disabled={isLastLesson}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300 bg-zinc-100 text-sm font-semibold hover:border-brand-light/40 hover:text-brand-light hover:bg-brand/10 text-zinc-900 disabled:opacity-30 disabled:hover:bg-zinc-100 disabled:hover:border-zinc-300 disabled:hover:text-zinc-900 disabled:cursor-not-allowed transition-all shadow-md"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main App Grid - 3 Columns on Large Screens */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
        
        {/* Left Sidebar: Navigation & Progress (col 3) */}
        <div className="lg:col-span-3 flex flex-col gap-6 w-full lg:sticky lg:top-32 no-print">
          
          {/* Module Curriculums Accordion */}
          <div className="liquid-glass rounded-3xl p-5 flex flex-col gap-5 max-h-[65vh] overflow-y-auto custom-scrollbar border border-zinc-200 shadow-xl">
            <div className="flex items-center gap-2 mb-2 px-2">
              <BookOpen className="w-4 h-4 text-brand" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-800">Table of Contents</h3>
            </div>
            
            <div className="flex flex-col gap-1.5">
              {tocHeadings.map((heading) => (
                <div key={heading.id} className="flex flex-col gap-1">
                  <div className={`flex items-center justify-between py-2 rounded-2xl transition-all duration-300 hover:bg-black/5 border border-transparent ${
                    heading.level === 1 ? 'px-3 mt-1' : heading.level === 2 ? 'px-3 ml-4' : 'px-3 ml-8'
                  }`}>
                    <button
                      onClick={() => {
                        const el = document.getElementById(heading.id);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                      className="flex items-start gap-3 text-left flex-grow"
                    >
                      <div className="mt-0.5 opacity-50">
                        <FileText className={`text-brand-light ${heading.level === 1 ? 'w-4 h-4' : 'w-3 h-3 mt-0.5'}`} />
                      </div>
                      <div className="flex flex-col">
                        <span className={`leading-tight transition-colors text-zinc-700 hover:text-zinc-900 ${
                          heading.level === 1 ? 'text-[13px] font-bold' : 'text-xs font-medium'
                        }`}>
                          {heading.title}
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              ))}
              {tocHeadings.length === 0 && (
                <span className="text-xs text-zinc-500 px-3 py-2">Loading contents...</span>
              )}
            </div>
          </div>

          {/* Resources / References Section */}
          {activeLesson.resources.length > 0 && (
            <div className="liquid-glass rounded-3xl p-6 flex flex-col gap-4 border border-zinc-200 shadow-xl">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                <ExternalLink className="w-3.5 h-3.5" /> Resources
              </h3>
              <div className="flex flex-col gap-2">
                {activeLesson.resources.map((res, idx) => (
                  <a
                    key={idx}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl border border-zinc-200 bg-black/20 hover:bg-brand/10 hover:border-brand/30 transition-all text-xs font-semibold group"
                  >
                    <span className="text-zinc-800 group-hover:text-brand-light transition-colors line-clamp-1">{res.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-900/30 group-hover:text-brand-light transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Center Main Canvas (col 9) */}
        <div className="lg:col-span-9 flex flex-col gap-8 w-full" id="main-reading-content">
          
          {/* Cinematic Video Player (no-print) */}
          {activeLesson.videoUrl && (
            <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-zinc-300 relative group bg-black no-print">
              <iframe
                src={`https://www.youtube.com/embed/${activeLesson.videoUrl}?rel=0&modestbranding=1`}
                title={activeLesson.title}
                className="absolute inset-0 w-full h-full border-0 relative z-10"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              {/* Inner Glow */}
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-3xl z-20"></div>
            </div>
          )}

          {/* Reading Canvas Container */}
          <div className={`rounded-3xl p-8 md:p-12 border transition-all duration-500 shadow-2xl relative overflow-hidden ${themeClasses[readTheme]} ${textClasses[textSize]}`}>
            
            {/* Decorative background glow for Dark Theme */}
            {readTheme === "dark" && (
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand/10 blur-[120px] rounded-full pointer-events-none" />
            )}
            
            {/* Document Header details */}
            <div className="border-b border-current/10 pb-6 mb-10 flex items-center justify-between text-xs text-current/50 font-mono tracking-widest uppercase relative z-10">
              <span className="font-bold">{course.title}</span>
              <span>EST. TIME: {activeLesson.duration}</span>
            </div>

            {/* Document Content Canvas */}
            <div className="prose prose-neutral dark:prose-invert max-w-none text-current leading-relaxed flex flex-col gap-6 relative z-10">
              {lessonOverview.split("\n\n").map((para, i) => {
                const cleanPara = para.trim();
                if (!cleanPara) return null;

                // Table Markdown Parser
                if (cleanPara.includes("|") && cleanPara.split("\n")[1]?.includes("-")) {
                  const rows = cleanPara.split("\n").filter(row => row.trim() && !row.includes("---") && !row.startsWith("|-") && !row.includes("| -"));
                  if (rows.length > 0) {
                    const headers = rows[0].split("|").map(h => h.trim()).filter(h => h);
                    const bodyRows = rows.slice(1).map(row => row.split("|").map(col => col.trim()).filter(col => col));
                    return (
                      <div key={i} className="overflow-x-auto my-8 border border-current/15 rounded-2xl bg-current/[0.02] shadow-sm">
                        <table className="w-full text-left text-sm border-collapse">
                          <thead>
                            <tr className="border-b border-current/15 bg-current/[0.04]">
                              {headers.map((h, idx) => (
                                <th key={idx} className="p-4 font-bold text-current uppercase tracking-wider text-xs">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {bodyRows.map((row, idx) => (
                              <tr key={idx} className="border-b border-current/5 hover:bg-current/[0.03] transition-colors last:border-b-0">
                                {row.map((col, cIdx) => (
                                  <td key={cIdx} className="p-4 text-current/90">{renderFormattedText(col)}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                }

                if (cleanPara.startsWith("###")) {
                  return <h3 key={i} id={`heading-${i}`} className="text-xl font-bold text-current mt-8 mb-3 tracking-tight">{renderFormattedText(cleanPara.replace("### ", ""))}</h3>;
                }
                if (cleanPara.startsWith("##")) {
                  return <h2 key={i} id={`heading-${i}`} className="text-2xl font-bold text-current mt-10 mb-4 tracking-tight">{renderFormattedText(cleanPara.replace("## ", ""))}</h2>;
                }
                if (cleanPara.startsWith("#")) {
                  return <h1 key={i} id={`heading-${i}`} className="text-3xl lg:text-4xl font-extrabold mt-12 mb-6 tracking-tight leading-tight">{renderFormattedText(cleanPara.replace(/^#\s*/, ""))}</h1>;
                }
                if (cleanPara.startsWith("---")) {
                  return <hr key={i} className="border-current/10 my-10" />;
                }
                if (cleanPara.startsWith("* ")) {
                  return (
                    <ul key={i} className="list-none flex flex-col gap-3 my-4">
                      {para.split("\n").map((li, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="text-brand mt-1.5 flex-shrink-0"><div className="w-1.5 h-1.5 rounded-full bg-brand" /></span>
                          <span className="text-current/90">{renderFormattedText(li.replace("* ", ""))}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (cleanPara.match(/^\d+\.\s+/)) {
                  return (
                    <ol key={i} className="list-decimal pl-6 flex flex-col gap-3 my-4 text-current/90 marker:text-brand marker:font-bold">
                      {para.split("\n").map((li, j) => (
                        <li key={j} className="pl-2">{renderFormattedText(li.replace(/^\d+\.\s+/, ""))}</li>
                      ))}
                    </ol>
                  );
                }
                if (para.startsWith("```")) {
                  const lines = para.split("\n").filter(l => !l.startsWith("```"));
                  return (
                    <pre key={i} className="bg-[#0d1117] border border-zinc-300 rounded-2xl p-5 md:p-6 font-mono text-[13px] md:text-sm text-gray-300 overflow-x-auto my-8 shadow-xl leading-relaxed select-all relative group">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand to-transparent opacity-50" />
                      <code>{lines.join("\n")}</code>
                    </pre>
                  );
                }
                if (cleanPara.startsWith(">")) {
                  return (
                    <blockquote key={i} className="border-l-4 border-brand bg-brand/5 p-5 rounded-r-2xl my-6 text-current/90 font-medium italic">
                      {renderFormattedText(cleanPara.replace(/^>\s*/gm, ""))}
                    </blockquote>
                  );
                }
                return <p key={i} className="my-4 text-current/90 leading-relaxed tracking-wide">{renderFormattedText(cleanPara)}</p>;
              })}
            </div>

            {/* Read Completion Checkbox at bottom */}
            <div className="mt-16 flex items-center justify-center border-t border-current/10 pt-10 no-print relative z-10">
              <button
                onClick={() => toggleLessonCompleted(activeLesson.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-full border text-base font-bold transition-all duration-300 active:scale-[0.97] shadow-lg ${
                  completedLessons[activeLesson.id]
                    ? "bg-brand border-brand text-black shadow-[0_0_20px_rgba(var(--brand-color),0.4)] hover:shadow-[0_0_30px_rgba(var(--brand-color),0.6)]"
                    : "border-current/20 hover:border-brand hover:text-brand hover:bg-brand/5 text-current/80"
                }`}
              >
                {completedLessons[activeLesson.id] ? (
                  <>
                    <CheckCircle className="w-5 h-5" /> Topic Completed!
                  </>
                ) : (
                  "Mark Topic Completed"
                )}
              </button>
            </div>

            {/* Bottom Pagination Links (no-print) */}
            <div className="grid grid-cols-2 gap-4 border-t border-current/10 pt-8 mt-10 no-print relative z-10">
              {currentIdx > 0 ? (
                <button
                  onClick={() => navigateLesson("prev")}
                  className="flex flex-col items-start justify-center gap-2 p-5 rounded-2xl border border-current/10 bg-current/[0.02] hover:border-brand/40 hover:bg-brand/5 transition-all text-left group"
                >
                  <span className="text-[10px] uppercase font-bold tracking-widest text-current/50 group-hover:text-brand transition-colors">Previous</span>
                  <span className="text-base font-bold text-current/90 group-hover:text-current transition-colors line-clamp-1">{flatLessonsListForNav[currentIdx - 1].title.replace(/^\d+\.\d+\s+/, "")}</span>
                </button>
              ) : <div />}

              {currentIdx < flatLessonsListForNav.length - 1 ? (
                <button
                  onClick={() => navigateLesson("next")}
                  className="flex flex-col items-end justify-center gap-2 p-5 rounded-2xl border border-current/10 bg-current/[0.02] hover:border-brand/40 hover:bg-brand/5 transition-all text-right group"
                >
                  <span className="text-[10px] uppercase font-bold tracking-widest text-current/50 group-hover:text-brand transition-colors">Next Up</span>
                  <span className="text-base font-bold text-current/90 group-hover:text-current transition-colors line-clamp-1">{flatLessonsListForNav[currentIdx + 1].title.replace(/^\d+\.\d+\s+/, "")}</span>
                </button>
              ) : <div />}
            </div>

          </div>
        </div>
      </div>
      {/* Custom styled scrollbars & utils */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.01);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .sepia-text-bold {
          color: #2b1f13 !important;
        }
      `}</style>
    </main>
  );
}
