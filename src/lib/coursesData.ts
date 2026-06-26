export interface CodingChallenge {
  title: string;
  instructions: string;
  initialCode: string;
  testCode: string; // JavaScript code to evaluate and test the student's solution
  solutionCode: string; // Correct solution code for reference
  language?: "javascript" | "sql"; // Language switcher for sandbox compiler
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl?: string; // YouTube Video ID (e.g. "dQw4w9WgXcQ")
  overview: string; // Markdown descriptions of the lesson
  overviewUrl?: string; // Optional path to dynamic markdown overview file
  resources: { name: string; url: string }[];
  challenge?: CodingChallenge;
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  modules: CourseModule[];
}

export const coursesData: Course[] = [
  {
    id: 4,
    title: "SQL & Relational Databases",
    description: "Master SQL query writing, database schemas, filtering, and aggregations. Learn database concepts from scratch using interactive queries.",
    duration: "25 hours",
    level: "Beginner to Intermediate",
    modules: [
      {
        id: "sql-m1",
        title: "30 Days of SQL Masterclass",
        lessons: [
          {
            id: "sql-m1-l1",
            title: "Full 30-Day Course Content",
            duration: "30 Days",
            overview: "Welcome to the complete 30-day SQL masterclass in Tenglish. This massive single lesson covers everything from basic databases to advanced optimization. Scroll through the contents on the right to navigate your daily learning journey.",
            overviewUrl: "/courses/sql/30_days_sql_tenglish.md",
            resources: [
              { name: "DB Fiddle (Practice environment)", url: "https://www.db-fiddle.com" },
              { name: "SQLBolt Interactive", url: "https://sqlbolt.com/" }
            ]
          }
        ]
      }
    ]
  }
];
