/**
 * Portfolio Data Store - Krutika Mohanty
 * 
 * NOTE: 100% verified factual data.
 * - Name spelling: Krutika Mohanty (K-R-U-T-I-K-A).
 * - Primary hero positioning: "Building Practical Software, One Problem at a Time."
 * - No inferred or unverified projects (Smart To-Do Prioritizer & Data Analysis App purged).
 * - Intense Programming League (IPL 2026) represented strictly as algorithmic challenges under activities/programs.
 * - C Programming repository describes actual repository contents (arrays, strings, foundational C).
 * - Zero placeholder emails or fake credential verification URLs.
 */

export const personalInfo = {
  name: "Krutika Mohanty",
  preferredName: "Krutika",
  monogram: "KM",
  role: "Software Developer in Progress | CSE Student | Web & AI Builder",
  headline: "Building Practical Software, One Problem at a Time.",
  subhead: "Computer Science & Engineering student at REVA University focused on software development, web technologies, and AI-powered applications.",
  bioShort: "Krutika Mohanty is a CSE student building practical software experiences across systems programming, data, modern web development, and AI-powered applications.",
  bioExtended: [
    "I am pursuing a B.Tech in Computer Science & Engineering at REVA University, with a core focus on developing into a technically rigorous software developer. I enjoy deconstructing complex systems, reasoning through algorithmic trade-offs, and turning real-world problem statements into resilient, functional software.",
    "My foundational experience spans low-level programming in C and C++, structured object-oriented work, relational database design with SQL, and practical Python engineering for data pipelines, Streamlit interfaces, and AI application development.",
    "Rather than treating software as abstract theory, I prioritize building tangible applications—from low-level graphics routines in C to multi-stage AI ingestion pipelines like VeritasIQ. My active trajectory is expanding toward modern web development and full-stack software engineering."
  ],
  education: {
    institution: "REVA University",
    degree: "B.Tech in Computer Science & Engineering",
    stage: "Second Year / Third Semester",
    cgpa: "10.0",
    cgpaNote: "Academic foundation across core computer science coursework",
    location: "Bengaluru, India"
  },
  links: {
    github: "https://github.com/krutika-codesdev",
    githubUsername: "krutika-codesdev",
    linkedin: "https://www.linkedin.com/in/krutikamohanty",
    email: null, // Connect directly via LinkedIn or GitHub
    resumeUrl: null, // Maintained directly via LinkedIn
  },
  availability: "Available for Software Engineering Internships & Projects"
};

export const developerSnapshot = {
  focus: "Software Development / Web Development",
  currentDirection: "Full-Stack Development",
  careerGoal: {
    eyebrow: "CAREER & LEARNING GOAL",
    title: "Full-Stack Development & Software Engineering",
    statement: "Targeting Software Engineering Internships during the 2026–2027 academic year by building solid fundamentals across full-stack web development, practical systems programming, and algorithmic problem solving."
  },
  strengths: [
    { title: "Problem Solving", desc: "Algorithmic thinking and breaking multi-step logic into robust modules." },
    { title: "Analytical Thinking", desc: "Evaluating trade-offs, validating data schemas, and edge-case handling." },
    { title: "Research Mindset", desc: "Diving deep into API specs, library internals, and systems architecture." },
    { title: "Teamwork", desc: "Collaborative developer practices, version control, and clear communication." },
    { title: "Consistency", desc: "Continuous code practice, structured learning, and steady project iteration." }
  ],
  interests: [
    "Full-Stack Web Applications",
    "AI-powered Applications & Agentic Pipelines",
    "Software Systems & Architecture",
    "Data-driven Solutions & Analytics"
  ]
};

export const skillsData = [
  {
    category: "Programming",
    icon: "Code2",
    skills: [
      { name: "C", level: "Intermediate", note: "Procedural logic, manual memory handling, pointers" },
      { name: "Python", level: "Intermediate", note: "Data processing, Streamlit, API integration, scripting" },
      { name: "C++", level: "Beginner", note: "OOP concepts, STL fundamentals, algorithmic problem solving" },
      { name: "Java", level: "Currently Learning", note: "Object-oriented principles, JVM fundamentals, class structures" }
    ]
  },
  {
    category: "Web Development",
    icon: "Globe",
    skills: [
      { name: "HTML5", level: "Beginner", note: "Semantic structure, accessibility conventions" },
      { name: "CSS3", level: "Beginner", note: "Responsive layouts, flexbox, grid, design tokens" },
      { name: "Web Development", level: "Developing", note: "Component architecture, modern interfaces, state management" }
    ]
  },
  {
    category: "Database & Storage",
    icon: "Database",
    skills: [
      { name: "SQL", level: "Intermediate", note: "Relational queries, joins, filtering, schema design" },
      { name: "MySQL", level: "Intermediate", note: "Table normalization, indexing basics, relational models" },
      { name: "DBMS", level: "Intermediate", note: "ACID properties, entity-relationship diagrams, transactions" }
    ]
  },
  {
    category: "Core Computer Science",
    icon: "Cpu",
    skills: [
      { name: "Data Structures & Algorithms", level: "Intermediate", note: "Arrays, lists, trees, search/sort algorithms, complexity analysis" },
      { name: "Computer Organization & Architecture", level: "Developing", note: "CPU execution cycle, memory hierarchy, binary logic" }
    ]
  },
  {
    category: "Tools & Development",
    icon: "Wrench",
    skills: [
      { name: "Git", level: "Beginner", note: "Version control, branching, commits, repository workflows" },
      { name: "GitHub", level: "Beginner", note: "Repository management, code hosting, open-source workflow" },
      { name: "Streamlit", level: "Project Experience", note: "Rapid reactive web apps, dashboards, interactive tools" },
      { name: "APIs & Integration", level: "Practical Exposure", note: "REST endpoints, JSON contracts, asynchronous data fetch" },
      { name: "AI / LLM Tools & APIs", level: "Practical Exposure", note: "Gemini API, prompt schemas, structured extraction, AI enrichment" }
    ]
  }
];

export const veritasIQData = {
  id: "veritasiq",
  title: "VeritasIQ",
  badge: "Flagship Project",
  headline: "AI-Powered Product Intelligence & Validation Platform",
  overview: "VeritasIQ is an AI-powered product intelligence and validation platform designed to ingest product records from heterogeneous sources, normalize and validate the data against strict schemas, resolve duplicate matches, generate evidence traces, and present explainable product health scores.",
  problem: "Enterprise and e-commerce product catalogs suffer from fragmented data: disparate suppliers provide product information in non-standard PDFs, loose CSVs, and nested XLSX files. Attribute values like weight, dimensions, and descriptions are inconsistent or missing, making manual auditing prone to human error and preventing unified catalog intelligence.",
  approach: "VeritasIQ resolves this through an automated multi-stage processing pipeline. It decouples document parsing from business rules: extracting raw tokens, mapping them into strongly-typed Pydantic models, normalizing physical units, running rigorous validation checks, and computing explainable health scores stored in a queryable SQLite database and rendered on a Streamlit UI.",
  architecture: [
    { step: 1, name: "Parser", detail: "Multi-format file ingestion: PDF extraction via pdfplumber, CSV parsing, XLSX workbook sheets." },
    { step: 2, name: "Mapper", detail: "Maps raw unstructured and semi-structured fields into structured attribute fields." },
    { step: 3, name: "Common Representation", detail: "Strict typing with Pydantic models ensuring consistent schema across all sources." },
    { step: 4, name: "Matcher", detail: "Resolves matching product records and connects overlapping identifiers." },
    { step: 5, name: "Normalizer", detail: "Standardizes attribute units (e.g., weight normalization into uniform metric units)." },
    { step: 6, name: "Validator", detail: "Evaluates completeness, allowable boundaries, and business rule conformance." },
    { step: 7, name: "Evidence", detail: "Captures verbatim source excerpts and bounding contexts verifying extracted values." },
    { step: 8, name: "Explainability", detail: "Generates interpretable diagnostic logs explaining why flags or errors were raised." },
    { step: 9, name: "Health Score", detail: "Calculates a deterministic quality and data integrity score for each item." },
    { step: 10, name: "SQLite Storage", detail: "Persists normalized entities, validation logs, and product scores in local SQLite." },
    { step: 11, name: "Streamlit UI", detail: "Interactive interface supporting multi-file uploads, score filters, and audit views." }
  ],
  techStack: [
    "Python",
    "Streamlit",
    "Pydantic",
    "SQLite",
    "Gemini API",
    "pdfplumber",
    "Pandas",
    "pytest"
  ],
  keyEngineeringWork: [
    {
      title: "Multi-Source Document Ingestion",
      description: "Engineered document extraction pipelines capable of extracting tabular and textual records from PDF catalogs using pdfplumber, as well as native CSV and Excel spreadsheets."
    },
    {
      title: "Pydantic Common Representation",
      description: "Defined robust Pydantic data models that strictly enforce attribute typing, required fields, and nested specifications across disparate input shapes."
    },
    {
      title: "Unit & Weight Normalization",
      description: "Implemented deterministic normalization algorithms that convert diverse physical measurement units (e.g. grams, kilograms, pounds, ounces) into standard base units."
    },
    {
      title: "Validation & Anomaly Pipeline",
      description: "Built a modular validation engine that flags missing mandatory fields, format violations, out-of-range numerical metrics, and conflicting attributes."
    },
    {
      title: "AI Enrichment with Gemini API",
      description: "Integrated the Gemini API to disambiguate unstructured product summaries, infer categorical taxonomies, and extract nuances missed by standard regular expressions."
    },
    {
      title: "Explainable Health Scoring",
      description: "Designed an explainable scoring rubric that grades overall product data readiness with clear itemized penalties, rather than an opaque black box."
    },
    {
      title: "SQLite Persistence & Auditability",
      description: "Structured relational tables in SQLite to store processed products, validation traces, and historical records with relational foreign key integrity."
    },
    {
      title: "Automated Testing with pytest",
      description: "Authored comprehensive unit tests covering parser edge cases, normalization math, Pydantic validation failures, and scoring accuracy."
    }
  ],
  outcome: "Transforms messy, unvetted catalog files into cleanly structured, auditable, and queryable product data with transparent validation flags and reproducible scoring.",
  github: "https://github.com/krutika-codesdev/veritas-iq",
  demo: null
};

export const otherProjects = [
  {
    id: "graphics-editor-c",
    title: "Graphics Editor in C",
    category: "Systems & C",
    summary: "Low-level 2D graphics manipulation and canvas rendering application built in C demonstrating manual memory management.",
    description: "A 2D graphics manipulation tool written in pure C exploring fundamental raster concepts, pixel manipulation, coordinate drawing, and custom structures without relying on high-level graphics frameworks.",
    technologies: ["C", "Memory Management", "Pointers", "2D Graphics"],
    highlights: [
      "Direct canvas memory buffer allocation and pixel manipulation",
      "Primitive rendering algorithms and 2D coordinate handling",
      "Strict manual memory allocation and pointer safety"
    ],
    github: "https://github.com/krutika-codesdev/graphics-editor-c",
    demo: null
  },
  {
    id: "c-programming",
    title: "C Programming Repository",
    category: "Systems & C",
    summary: "Foundational implementations of C programming concepts, structured exercises, array processing, and string manipulation.",
    description: "A code repository documenting core C programming work, covering array algorithms, string manipulation routines, memory handling, and procedural problem-solving exercises in standard C.",
    technologies: ["C", "Arrays", "Strings", "Algorithms", "Procedural Programming"],
    highlights: [
      "Modular array processing and algorithmic operations",
      "String manipulation routines and memory handling in standard C",
      "Procedural problem solving and core programming fundamentals"
    ],
    github: "https://github.com/krutika-codesdev/c-programming",
    demo: null
  },
  {
    id: "leetcode-solutions",
    title: "LeetCode Solutions & Algorithmic Practice",
    category: "Algorithms & Data Structures",
    summary: "Curated problem solutions across fundamental data structures (arrays, strings, stacks, linked lists) for Activity 4.",
    description: "Documentation of algorithmic problem-solving for Portfolio Building Activity 4, covering 8 problems across Arrays & Strings, Basic Algorithms, Stacks, and Linked Lists with complexity notes and verified test submissions.",
    technologies: ["Data Structures", "Algorithms", "Problem Solving", "Time Complexity"],
    highlights: [
      "8 verified solutions with time and space complexity analysis",
      "Progress tracking across 4 core foundational modules",
      "Consistent commit history and documented solution notes"
    ],
    github: "https://github.com/krutika-codesdev/leetcode-solutions",
    demo: null
  },
  {
    id: "hello-world",
    title: "Development Environment & Collaboration",
    category: "Tooling & Collaboration",
    summary: "Foundational development setup, Git version control workflow, and pair programming collaboration for Activities 1–3.",
    description: "Coursework repository for Portfolio Building Activities 1–3 documenting VS Code MinGW-w64 toolchain configuration, Git repository management, and live collaborative pair programming using VS Code Live Share and GitLens.",
    technologies: ["VS Code", "MinGW-w64", "Git", "GitHub", "Live Share", "GitLens"],
    highlights: [
      "Activity 1: Local C/C++ compiler and VS Code toolchain configuration",
      "Activity 2: Git version control initialization and remote repository tracking",
      "Activity 3: Pair programming session with peer via Live Share and GitLens"
    ],
    github: "https://github.com/krutika-codesdev/Hello-World",
    demo: null
  }
];

export const certificatesData = [
  {
    id: "aws-ai-practitioner",
    title: "AWS AI Practitioner Challenge",
    issuer: "Udacity",
    date: "June 18, 2026",
    skills: ["Cloud AI Fundamentals", "Machine Learning Concepts", "AWS AI Services"],
    description: "Technical foundational challenge covering practical machine learning paradigms, foundational AI service architectures, and cloud-native AI workload considerations on AWS."
  },
  {
    id: "data-analysis-python",
    title: "Data Analysis with Python",
    issuer: "IBM SkillsBuild",
    date: "April 5, 2026",
    skills: ["Python", "Pandas", "Data Wrangling", "Exploratory Data Analysis"],
    description: "Program covering data manipulation, handling missing values, exploratory analysis, and structured data handling techniques in Python."
  },
  {
    id: "data-visualization-python",
    title: "Data Visualization with Python",
    issuer: "IBM SkillsBuild",
    date: "April 4, 2026",
    skills: ["Data Visualization", "Matplotlib", "Seaborn", "Chart Design"],
    description: "Focused training on designing insightful scientific charts, comparative distributions, heatmaps, and statistical visualizations from datasets."
  },
  {
    id: "python-101-ds",
    title: "Python 101 for Data Science",
    issuer: "IBM SkillsBuild",
    date: "April 4, 2026",
    skills: ["Python Core", "Data Structures", "File I/O", "Functional Basics"],
    description: "Core programming qualification verifying syntax mastery, memory model understanding, standard library data structures, and foundational computing in Python."
  }
];

export const activitiesData = [
  {
    organization: "Intense Programming League (IPL 2026)",
    category: "Algorithmic Challenges",
    focus: "Competitive Problem Solving",
    description: "Participation in algorithmic challenges and competitive problem solving, focusing on logic, data structures, and efficient code execution under challenge conditions.",
    skills: ["Algorithmic Thinking", "Data Structures", "Problem Solving"]
  },
  {
    organization: "UniHack / Unilog",
    category: "Hackathon / Technical Challenge",
    focus: "Product Intelligence & Validation",
    description: "The hackathon challenge context in which VeritasIQ was developed, addressing heterogeneous catalog ingestion, data validation, and automated entity intelligence.",
    skills: ["Product Intelligence", "Data Validation", "Rapid Prototyping"],
    link: "https://github.com/krutika-codesdev/veritas-iq"
  },
  {
    organization: "AWS Launchpad",
    category: "Technical Workshop",
    focus: "Cloud & AI Fundamentals",
    description: "Involvement in technical cloud workshops and developer program sessions focused on modern cloud workloads and AI service integrations.",
    skills: ["Cloud Architecture", "AWS Services"]
  },
  {
    organization: "Google Developer Groups (GDG)",
    category: "Developer Community",
    focus: "Technical Meetups & Workshops",
    description: "Participation in developer community meetups, technical sessions, and workshops exploring emerging web technologies and modern developer tools.",
    skills: ["Modern Web", "Developer Tooling"]
  },
  {
    organization: "IEEE Student Branch",
    category: "Technical Student Society",
    focus: "Academic & Technical Sessions",
    description: "Student branch membership and participation in academic workshops, technical seminars, and engineering collaborative activities.",
    skills: ["Engineering Fundamentals", "Academic Collaboration"]
  }
];

export const courseActivitiesData = [
  {
    code: "ACT 01",
    title: "Activity 1 — Dev Environment Setup",
    role: "VS Code, MinGW-w64 GCC/G++ toolchain configuration, compiler verification, and C build workflow.",
    category: "coursework",
    link: "https://github.com/krutika-codesdev/Hello-World"
  },
  {
    code: "ACT 02",
    title: "Activity 2 — Git & GitHub Setup",
    role: "Git version control initialization, repository setup, commit tracking, and remote synchronization.",
    category: "coursework",
    link: "https://github.com/krutika-codesdev/Hello-World"
  },
  {
    code: "ACT 03",
    title: "Activity 3 — Collaboration & Live Share",
    role: "Pair programming session with peer via VS Code Live Share, co-authoring greet(), and GitLens tracking.",
    category: "coursework",
    link: "https://github.com/krutika-codesdev/Hello-World"
  },
  {
    code: "ACT 04",
    title: "Activity 4 — LeetCode Practice",
    role: "Algorithmic problem-solving across Arrays, Strings, Stacks, and Linked Lists with documented progress.",
    category: "coursework",
    link: "https://github.com/krutika-codesdev/leetcode-solutions"
  }
];

export const externalActivitiesData = [
  {
    code: "IPL",
    title: "INTENSE PROGRAMMING LEAGUE",
    role: "Algorithmic challenges & competitive problem solving",
    category: "programs"
  },
  {
    code: "UNIHACK",
    title: "UNIHACK / UNILOG",
    role: "Technical challenge context in which VeritasIQ was developed",
    category: "programs",
    link: "https://github.com/krutika-codesdev/veritas-iq"
  },
  {
    code: "AWS",
    title: "AWS LAUNCHPAD",
    role: "Cloud workloads & foundational AI technical workshop sessions",
    category: "programs"
  },
  {
    code: "COMMUNITY",
    title: "GDG & IEEE STUDENT BRANCH",
    role: "Technical developer meetups, workshops, and engineering collaboration",
    category: "programs"
  }
];

