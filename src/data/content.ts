export const siteConfig = {
  name: "Ashish Kumar",
  title: "Senior Software Engineer",
  email: "ycsashish120@gmail.com",
  phone: "+91 9515374137",
  location: "India",
  resumeUrl:
    "https://drive.google.com/file/d/14hSjnqDjuEtkCY9z4FejgLWNwR3MDx7l/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/a1ashish1/",
    leetcode: "https://leetcode.com/a1ashish1",
    github: "https://github.com/a1ashish1",
  },
};

export const heroData = {
  greeting: "Hi, I'm",
  name: "Ashish Kumar",
  title: "Senior Software Engineer",
  tagline:
    "I architect backend systems that scale — from distributed services handling millions of requests to AI-powered pipelines processing 50M+ records.",
  cta: {
    primary: { label: "Download Resume", href: siteConfig.resumeUrl },
    secondary: { label: "Get in Touch", href: "#contact" },
  },
  terminal: {
    command: "cat profile.json",
    output: `{
  "role": "Senior Software Engineer",
  "experience": "6+ years",
  "focus": [
    "distributed systems",
    "data pipelines",
    "applied AI"
  ],
  "current": "ABCFitness",
  "status": "building & shipping"
}`,
  },
};

export const aboutData = {
  paragraphs: [
    "Over the past 6+ years, I've been building backend systems where reliability, performance, and scale aren't optional — they're the baseline. From distributed services powering enterprise platforms to LLM-driven search engines processing 50M+ records, I focus on turning complex problems into simple, dependable solutions.",
    "At Highspot, I led the technical direction for semantic search powered by LLMs and RAG, driving a 33% cost reduction and 65% improvement in processing efficiency. At Oracle, I built high-performance REST APIs with P95 latency under 300ms and improved system performance by 40%.",
    "I believe great backend engineering is invisible — when systems just work at scale, that's when you know the infrastructure is doing its job.",
  ],
  stats: [
    { value: "6+", label: "Years Experience" },
    { value: "50M+", label: "Records Processed" },
    { value: "99.99%", label: "Uptime Delivered" },
    { value: "33%", label: "Cost Reduction" },
  ],
};

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  bullets: string[];
  tech: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    role: "Senior Software Engineer",
    company: "ABCFitness",
    duration: "Sep 2025 — Present",
    bullets: [
      "Building B2B healthcare capabilities for enterprise gym and club networks, architecting scalable member data flows across distributed systems",
      "Engineering backend services with Oracle DB, Spring (Java), and Kafka for real-time event processing and data consistency",
    ],
    tech: ["Java", "Spring", "Oracle DB", "Kafka", "Microservices"],
  },
  {
    role: "SDE II L2",
    company: "Highspot",
    duration: "Dec 2023 — Sep 2025",
    bullets: [
      "Led technical direction for LLM + RAG powered semantic search across enterprise content, serving as the subject matter expert for the search platform",
      "Designed and implemented embeddings pipeline processing 50M+ records with optimized cost, efficiency, and timing — achieving ~33% cost reduction",
      "Improved legacy file processing throughput by ~65% through architectural refactoring and pipeline optimization",
      "Owned content-based integrations from cloud storage services, building reliable ingestion and processing infrastructure",
    ],
    tech: ["Python", "LLMs", "RAG", "Embeddings", "AWS", "Elasticsearch"],
  },
  {
    role: "Application Engineer",
    company: "Oracle",
    duration: "Sep 2020 — Dec 2023",
    bullets: [
      "Built high-performance REST Attachments API achieving P95 latency < 300ms, serving enterprise clients at scale",
      "Delivered ~40% performance improvement through systematic profiling, query optimization, and caching strategies",
      "Developed the REST attachments frontend using Oracle VBCS, bridging backend capabilities with user-facing interfaces",
    ],
    tech: ["Java", "REST APIs", "Oracle DB", "VBCS", "Performance Tuning"],
  },
  {
    role: "Software Intern",
    company: "Samsung Research",
    duration: "May 2019 — Jul 2019",
    bullets: [
      "Built an Alexa Skill for Samsung Smart Washer, enabling voice-controlled appliance management through natural language",
      "Developed a diagnostic chatbot for Smart Washer troubleshooting, reducing support ticket volume",
    ],
    tech: ["Alexa SDK", "Node.js", "NLP", "IoT"],
  },
];

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Java", "Python", "C++", "JavaScript", "Ruby", "SQL"],
  },
  {
    name: "Frameworks & APIs",
    skills: [
      "Spring Boot",
      "REST",
      "GraphQL",
      "gRPC",
      "WebSockets",
      "OAuth2 / JWT",
    ],
  },
  {
    name: "Cloud & Infrastructure",
    skills: [
      "AWS (Lambda, S3, EC2, RDS)",
      "Kubernetes",
      "Docker",
      "Terraform",
      "GitHub Actions",
      "Jenkins",
    ],
  },
  {
    name: "Databases & Storage",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "Oracle DB",
      "DynamoDB",
    ],
  },
  {
    name: "Data & AI",
    skills: [
      "Apache Kafka",
      "ETL Pipelines",
      "LLMs / RAG",
      "Embeddings",
      "Machine Learning",
      "Big Data",
    ],
  },
  {
    name: "Architecture & Practices",
    skills: [
      "System Design",
      "Microservices",
      "Event-Driven Architecture",
      "SOLID / Design Patterns",
      "TDD",
      "CI/CD",
    ],
  },
  {
    name: "Observability",
    skills: [
      "Prometheus",
      "Grafana",
      "Jaeger",
      "Distributed Tracing",
      "Logging",
      "Alerting",
    ],
  },
];

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export const achievementsData: Achievement[] = [
  {
    title: "AI Hackathon Winner",
    description: "1st place among 30+ teams in company-wide AI hackathon",
    icon: "trophy",
  },
  {
    title: "CodeChef Global Rank 51",
    description: "1800+ rating in competitive programming, February 2019",
    icon: "code",
  },
  {
    title: "National Science Olympiad",
    description: "Rank 1 nationwide in the National Science Olympiad",
    icon: "award",
  },
  {
    title: "Best Sportsman Award",
    description:
      "Recognized as Best Sportsman at NIT Warangal, 2019–20",
    icon: "medal",
  },
  {
    title: "Merit Scholar",
    description: "Top 3 percentile merit scholarship recipient for all 4 years of undergraduate study",
    icon: "graduation",
  },
  {
    title: "State TT Champion",
    description:
      "State and university table tennis champion, represented at national level",
    icon: "target",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
