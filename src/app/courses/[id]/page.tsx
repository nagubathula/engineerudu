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
  const [readTheme, setReadTheme] = useState<"light" | "sepia" | "dark">("dark");
  const [textSize, setTextSize] = useState<"sm" | "base" | "lg">("base");
  
  // Lesson Completion Progress State
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});
  
  // Notes State
  const [notes, setNotes] = useState<string>("");
  const [savingNotes, setSavingNotes] = useState(false);

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

    // Load notes
    const savedNote = localStorage.getItem(`engineerudu:notes:${courseId}:${activeLesson.id}`);
    setNotes(savedNote || "");
  }, [activeLesson, courseId]);

  // Notes Auto-save handler
  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setNotes(value);
    setSavingNotes(true);
    
    if (activeLesson) {
      localStorage.setItem(`engineerudu:notes:${courseId}:${activeLesson.id}`, value);
    }
    
    // Simple debounce visualization
    const timeout = setTimeout(() => {
      setSavingNotes(false);
    }, 800);
    return () => clearTimeout(timeout);
  };

  // Toggle checklist lessons
  const toggleLessonCompleted = (lessonId: string, customVal?: boolean) => {
    const newProgress = {
      ...completedLessons,
      [lessonId]: customVal !== undefined ? customVal : !completedLessons[lessonId]
    };
    
    setCompletedLessons(newProgress);
    localStorage.setItem(`engineerudu:progress:${courseId}`, JSON.stringify(newProgress));
  };

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
        return <strong key={index} className="font-bold text-neutral-900 dark:text-white sepia-text-bold">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code 
            key={index} 
            className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded font-mono text-[0.9em] border border-black/10 dark:border-white/10"
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
    dark: "bg-zinc-950/70 border-white/10 text-zinc-200 shadow-md backdrop-blur-md"
  };

  const textClasses = {
    sm: "text-sm leading-relaxed",
    base: "text-base leading-relaxed lg:text-[17px]",
    lg: "text-lg leading-loose"
  };

  return (
    <main className="w-full max-w-7xl mx-auto px-6 py-4 flex flex-col gap-6 animate-fade-rise" id="print-wrapper">
      {/* Print-only CSS overlay */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          /* Hide layout components */
          body > *:not(#print-wrapper),
          #print-wrapper > :not(#main-reading-content),
          .no-print {
            display: none !important;
          }
          #main-reading-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white !important;
            color: black !important;
            padding: 2.5rem !important;
            margin: 0 !important;
            box-shadow: none !important;
            border: none !important;
          }
          .sepia-text-bold {
            color: black !important;
          }
        }
      `}} />

      {/* Top Header & Breadcrumbs (no-print) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4 no-print">
        <div className="flex items-center gap-4">
          <Link 
            href="/courses" 
            className="w-10 h-10 rounded-full border border-white/10 hover:border-brand-light/30 hover:text-brand-light flex items-center justify-center transition-colors text-muted-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Courses / {course.title}</span>
            <h1 className="text-xl md:text-2xl font-semibold text-foreground mt-0.5">{activeLesson.title}</h1>
          </div>
        </div>

        {/* Dynamic Lesson Navigation */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigateLesson("prev")}
            disabled={isFirstLesson}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:border-brand-light/30 hover:text-brand-light hover:bg-brand/5 text-foreground disabled:opacity-40 disabled:hover:bg-white/5 disabled:hover:border-white/10 disabled:hover:text-muted-foreground disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>
          <button
            onClick={() => navigateLesson("next")}
            disabled={isLastLesson}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:border-brand-light/30 hover:text-brand-light hover:bg-brand/5 text-foreground disabled:opacity-40 disabled:hover:bg-white/5 disabled:hover:border-white/10 disabled:hover:text-muted-foreground disabled:cursor-not-allowed transition-all"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Sandbox Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Sidebar Table of Contents (no-print) */}
        <div className="lg:col-span-4 flex flex-col gap-6 w-full lg:sticky lg:top-28 no-print">
          
          {/* Progress Tracker Card */}
          <div className="liquid-glass rounded-2xl p-5 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-foreground">Course Completion</span>
              <span className="text-sm font-semibold text-white">{progressPercent}%</span>
            </div>
            
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden relative">
              <div 
                className="h-full bg-brand-gradient rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-[11px] text-muted-foreground mt-2 font-mono">
              {completedCount} of {totalLessons} topics read
            </span>
          </div>

          {/* Module Curriculums Accordion */}
          <div className="liquid-glass rounded-2xl p-5 flex flex-col gap-5 max-h-[58vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-center gap-2 mb-1">
              <BookOpen className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Table of Contents</h3>
            </div>
            
            {course.modules.map((module) => (
              <div key={module.id} className="flex flex-col gap-2">
                <h4 className="text-xs font-semibold text-white/60 border-b border-white/5 pb-1">{module.title}</h4>
                <div className="flex flex-col gap-1">
                  {module.lessons.map((lesson) => {
                    const isActive = lesson.id === activeLesson.id;
                    const isCompleted = !!completedLessons[lesson.id];
                    
                    return (
                      <div 
                        key={lesson.id}
                        className={`flex items-center justify-between px-3 py-2 rounded-xl transition-all duration-200 ${
                          isActive 
                            ? "bg-brand/10 border border-brand/20 shadow-sm" 
                            : "hover:bg-white/[0.03] border border-transparent"
                        }`}
                      >
                        <button
                          onClick={() => setActiveLesson(lesson)}
                          className="flex items-start gap-2 text-left flex-grow mr-2"
                        >
                          <div className="flex flex-col">
                            <span className={`text-sm leading-tight transition-colors ${isActive ? "text-brand-light font-medium" : "text-muted-foreground hover:text-foreground"}`}>
                              {lesson.title.replace(/^\d+\.\d+\s+/, "")}
                            </span>
                            <span className="text-[10px] text-muted-foreground mt-1 font-mono">{lesson.duration}</span>
                          </div>
                        </button>

                        {/* Completion Checkmark */}
                        <button
                          onClick={() => toggleLessonCompleted(lesson.id)}
                          className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                            isCompleted
                              ? "bg-brand border-brand text-black"
                              : "border-white/20 hover:border-brand-light/40 text-transparent"
                          }`}
                        >
                          <Check className="w-3.5 h-3.5 stroke-[3px]" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Area: Main Document Canvas Panel */}
        <div className="lg:col-span-8 flex flex-col gap-6 w-full" id="main-reading-content">
          
          {/* Collapsible Video Lecture Accordion (no-print) */}
          <details className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 no-print">
            <summary className="flex items-center justify-between p-4 cursor-pointer select-none text-sm font-semibold text-white/90 hover:bg-white/5">
              <span className="flex items-center gap-2">
                <PlayCircle className="w-4 h-4 text-brand-light" /> Watch Video Lecture
              </span>
              <span className="text-xs text-muted-foreground font-mono group-open:hidden">Expand Video ▾</span>
              <span className="text-xs text-muted-foreground font-mono hidden group-open:inline">Collapse Video ▴</span>
            </summary>
            <div className="aspect-video bg-black border-t border-white/10 relative">
              <iframe
                src={`https://www.youtube.com/embed/${activeLesson.videoUrl}?rel=0&modestbranding=1`}
                title={activeLesson.title}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </details>

          {/* Reading Customization Controls Bar (no-print) */}
          <div className="flex flex-wrap items-center justify-between gap-4 border border-white/10 bg-white/5 rounded-2xl p-3.5 no-print">
            <div className="flex items-center gap-3.5">
              {/* Theme togglers */}
              <div className="flex items-center gap-1.5 bg-black/20 p-1 rounded-lg border border-white/5">
                <button
                  onClick={() => setReadTheme("light")}
                  className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                    readTheme === "light" 
                      ? "bg-white text-zinc-950 shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Light
                </button>
                <button
                  onClick={() => setReadTheme("sepia")}
                  className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                    readTheme === "sepia" 
                      ? "bg-[#eadfcc] text-[#5c4a3b] shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Sepia
                </button>
                <button
                  onClick={() => setReadTheme("dark")}
                  className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                    readTheme === "dark" 
                      ? "bg-zinc-800 text-white shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Dark
                </button>
              </div>

              {/* Text Sizing */}
              <div className="flex items-center gap-1 bg-black/20 p-1 rounded-lg border border-white/5">
                <button
                  onClick={() => setTextSize("sm")}
                  className={`w-7 h-7 flex items-center justify-center rounded text-xs font-bold transition-all ${
                    textSize === "sm" ? "bg-brand text-black shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Smaller Text"
                >
                  A-
                </button>
                <button
                  onClick={() => setTextSize("base")}
                  className={`w-7 h-7 flex items-center justify-center rounded text-xs font-bold transition-all ${
                    textSize === "base" ? "bg-brand text-black shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Default Text"
                >
                  A
                </button>
                <button
                  onClick={() => setTextSize("lg")}
                  className={`w-7 h-7 flex items-center justify-center rounded text-xs font-bold transition-all ${
                    textSize === "lg" ? "bg-brand text-black shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Larger Text"
                >
                  A+
                </button>
              </div>
            </div>

            {/* Print action button */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs font-semibold hover:border-brand-light/30 hover:text-brand-light text-foreground transition-all"
            >
              <Printer className="w-3.5 h-3.5" /> Save PDF / Print
            </button>
          </div>

          {/* Reading Canvas Container */}
          <div className={`rounded-3xl p-8 lg:p-12 border transition-colors duration-300 ${themeClasses[readTheme]} ${textClasses[textSize]}`}>
            
            {/* Document Header details */}
            <div className="border-b border-current/10 pb-6 mb-8 flex items-center justify-between text-xs text-current/60 font-mono">
              <span>{course.title.toUpperCase()}</span>
              <span>READ TIME: {activeLesson.duration}</span>
            </div>

            {/* Document Content Canvas */}
            <div className="prose prose-neutral dark:prose-invert max-w-none text-current leading-relaxed flex flex-col gap-6">
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
                      <div key={i} className="overflow-x-auto my-6 border border-current/20 rounded-2xl bg-black/5">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="border-b border-current/20 bg-current/5">
                              {headers.map((h, idx) => (
                                <th key={idx} className="p-3.5 font-bold text-current uppercase tracking-wider">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {bodyRows.map((row, idx) => (
                              <tr key={idx} className="border-b border-current/10 hover:bg-current/[0.02] last:border-b-0">
                                {row.map((col, cIdx) => (
                                  <td key={cIdx} className="p-3.5 text-current/95">{renderFormattedText(col)}</td>
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
                  return <h3 key={i} className="text-lg font-bold text-current mt-6 mb-2 tracking-tight">{renderFormattedText(cleanPara.replace("### ", ""))}</h3>;
                }
                if (cleanPara.startsWith("##")) {
                  return <h2 key={i} className="text-xl font-bold text-current mt-8 mb-3 border-b border-current/10 pb-2 tracking-tight">{renderFormattedText(cleanPara.replace("## ", ""))}</h2>;
                }
                if (cleanPara.startsWith("#")) {
                  return <h1 key={i} className="text-2xl font-extrabold text-current mt-10 mb-4 border-b border-current/25 pb-3.5 tracking-tight">{renderFormattedText(cleanPara.replace("# ", ""))}</h1>;
                }
                if (cleanPara.startsWith("---")) {
                  return <hr key={i} className="border-current/10 my-6" />;
                }
                if (cleanPara.startsWith("* ")) {
                  return (
                    <ul key={i} className="list-disc pl-5 flex flex-col gap-2 my-2 text-current/90">
                      {para.split("\n").map((li, j) => (
                        <li key={j}>{renderFormattedText(li.replace("* ", ""))}</li>
                      ))}
                    </ul>
                  );
                }
                if (cleanPara.match(/^\d+\.\s+/)) {
                  return (
                    <ol key={i} className="list-decimal pl-5 flex flex-col gap-2 my-2 text-current/90">
                      {para.split("\n").map((li, j) => (
                        <li key={j}>{renderFormattedText(li.replace(/^\d+\.\s+/, ""))}</li>
                      ))}
                    </ol>
                  );
                }
                if (para.startsWith("```")) {
                  const lines = para.split("\n").filter(l => !l.startsWith("```"));
                  return (
                    <pre key={i} className="bg-black/85 border border-current/10 rounded-xl p-4.5 font-mono text-xs text-white overflow-x-auto my-4 shadow-md leading-relaxed select-all">
                      <code>{lines.join("\n")}</code>
                    </pre>
                  );
                }
                return <p key={i} className="my-3 text-current/90 leading-relaxed">{renderFormattedText(cleanPara)}</p>;
              })}
            </div>

            {/* Resources / References Section */}
            {activeLesson.resources.length > 0 && (
              <div className="border-t border-current/10 mt-12 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-4 h-4 text-current/60" />
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-current/75">References & Links</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeLesson.resources.map((res, idx) => (
                    <a
                      key={idx}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl border border-current/10 bg-current/[0.02] hover:bg-current/[0.05] transition-all text-xs font-semibold group no-print"
                    >
                      <span className="text-current/90 group-hover:text-current transition-colors">{res.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-current/50 group-hover:text-current/80 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Personal Notes Section (no-print) */}
            <div className="border-t border-current/10 mt-10 pt-8 no-print">
              <details className="group border border-current/10 bg-current/[0.01] rounded-2xl overflow-hidden transition-all duration-300">
                <summary className="flex items-center justify-between p-4 cursor-pointer select-none text-xs font-bold uppercase tracking-wider text-current/75 hover:bg-current/[0.03]">
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4" /> Personal Notes & Takeaways
                  </span>
                  {savingNotes ? (
                    <span className="text-[10px] text-muted-foreground animate-pulse font-mono">Saving note...</span>
                  ) : (
                    <span className="text-[10px] text-muted-foreground font-mono group-open:hidden">Expand notes ▾</span>
                  )}
                  <span className="text-[10px] text-muted-foreground font-mono hidden group-open:inline">Hide notes ▴</span>
                </summary>
                
                <div className="p-4 border-t border-current/10 bg-black/5">
                  <textarea
                    value={notes}
                    onChange={handleNotesChange}
                    placeholder="Jot down formulas, logic snippets, or summaries from this lesson. Notes are saved automatically to local storage."
                    className="w-full h-40 p-4 border border-current/10 rounded-xl bg-transparent text-sm text-current outline-none resize-none leading-relaxed focus:border-current/25 transition-colors"
                  />
                </div>
              </details>
            </div>

            {/* Read Completion Checkbox at bottom */}
            <div className="mt-8 flex items-center justify-center border-t border-current/10 pt-8 no-print">
              <button
                onClick={() => toggleLessonCompleted(activeLesson.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-semibold transition-all active:scale-[0.98] ${
                  completedLessons[activeLesson.id]
                    ? "bg-brand border-brand text-black font-semibold hover:bg-brand-light hover:border-brand-light"
                    : "border-current/20 hover:border-brand hover:text-brand hover:bg-brand/5 text-current/80"
                }`}
              >
                {completedLessons[activeLesson.id] ? (
                  <>
                    <CheckCircle className="w-4 h-4" /> Topic Completed!
                  </>
                ) : (
                  "Mark Topic Completed"
                )}
              </button>
            </div>

          </div>

          {/* Bottom Pagination Links (no-print) */}
          <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-6 mt-4 no-print">
            {currentIdx > 0 ? (
              <button
                onClick={() => navigateLesson("prev")}
                className="flex flex-col items-start gap-1 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-brand-light/20 hover:bg-brand/5 transition-all text-left max-w-[45%] group"
              >
                <span className="text-[10px] uppercase font-bold text-muted-foreground">Previous Lesson</span>
                <span className="text-sm font-semibold text-white group-hover:text-brand-light transition-colors truncate max-w-[200px]">{flatLessonsListForNav[currentIdx - 1].title.replace(/^\d+\.\d+\s+/, "")}</span>
              </button>
            ) : <div />}

            {currentIdx < flatLessonsListForNav.length - 1 ? (
              <button
                onClick={() => navigateLesson("next")}
                className="flex flex-col items-end gap-1 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-brand-light/20 hover:bg-brand/5 transition-all text-right max-w-[45%] group"
              >
                <span className="text-[10px] uppercase font-bold text-muted-foreground">Next Lesson</span>
                <span className="text-sm font-semibold text-white group-hover:text-brand-light transition-colors truncate max-w-[200px]">{flatLessonsListForNav[currentIdx + 1].title.replace(/^\d+\.\d+\s+/, "")}</span>
              </button>
            ) : <div />}
          </div>

        </div>

      </div>

      {/* Custom styled scrollbars */}
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
          background: rgba(255, 255, 255, 0.08);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.15);
        }
        .sepia-text-bold {
          color: #2b1f13 !important;
        }
      `}</style>
    </main>
  );
}
