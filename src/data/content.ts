export const siteConfig = {
  name: "Ashish Kumar",
  title: "Senior Software Engineer",
  email: "ycsashish120@gmail.com",
  phone: "+91 9515374137",
  location: "India",
  resumeUrl:
    "https://drive.google.com/file/d/1mzDx5Hy-eA4vh61iclv7hoRIEI0ZtMna/view",
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
    "Backend engineer with 6 years across Oracle, Highspot, and ABCFitness. I build APIs, data pipelines, and AI-powered features for enterprise products — focused on things that are reliable, fast, and actually useful.",
  cta: {
    primary: { label: "Download Resume", href: siteConfig.resumeUrl },
    secondary: { label: "Get in Touch", href: "#contact" },
  },
  terminal: {
    command: "cat profile.json",
    output: `{
  "role": "Senior Software Engineer",
  "experience": "6 years",
  "stack": ["Java", "Python", "AWS", "Kafka"],
  "current": "ABCFitness",
  "previous": ["Highspot", "Oracle"],
  "education": "NIT Warangal"
}`,
  },
};

export const aboutData = {
  paragraphs: [
    "I've spent the last 6 years writing backend code for enterprise products. At Oracle, that meant building REST APIs for supply chain management — handling large file attachments at sub-300ms latency, optimizing database queries, and shipping features used by enterprise customers daily.",
    "At Highspot, I shifted toward AI-driven features — architecting data layers for document parsing, generating slide-level embeddings for content similarity, and driving AI tooling adoption (Copilot, Cursor) across the team that cut turnaround time by 75%. Currently at ABCFitness, I'm building B2B healthcare integrations with Spring, Oracle DB, and Kafka.",
    "I studied at NIT Warangal (8.65 GPA), enjoy competitive programming (CodeChef global rank 51), and when I'm not coding, I'm probably playing table tennis.",
  ],
  stats: [
    { value: "6+", label: "Years Experience" },
    { value: "< 300ms", label: "P95 API Latency" },
    { value: "75%", label: "Faster Turnaround" },
    { value: "40%", label: "Query Perf Gain" },
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
    role: "Senior Software Developer",
    company: "ABCFitness",
    duration: "Sep 2025 — Present",
    bullets: [
      "Developing secure, scalable B2B healthcare integrations for gyms and clubs using Spring (Java), Oracle DB, and Kafka, with a focus on reliable member data flows",
    ],
    tech: ["Java", "Spring", "Oracle DB", "Kafka"],
  },
  {
    role: "SDE II L2",
    company: "Highspot",
    duration: "Dec 2023 — Sep 2025",
    bullets: [
      "Spearheaded adoption of AI tools (GitHub Copilot, Windsurf, Cursor) and developed automation workflows, reducing turnaround time by 75% and increasing unit test coverage from 24% to 88%",
      "Architected a data layer for PPT and DOCX parsing to enable AI-driven content understanding; generated slide-level embeddings enabling industry-first similarity analysis and performance metrics",
      "Optimized legacy Windows file processing system with a 40% throughput gain; implemented CHIPS for third-party cookie deprecation, covering 97% of use cases on Chromium OS",
    ],
    tech: ["Python", "Embeddings", "AI Tooling", "CHIPS", "AWS"],
  },
  {
    role: "Application Engineer",
    company: "Oracle",
    duration: "Sep 2020 — Dec 2023",
    bullets: [
      "Built high-performance REST APIs for Oracle SCM, including 25MB attachments with P95 latency under 300ms and document history under 100ms",
      "Led REST integration for Item Substitution in Oracle Purchasing, ensuring scalable backend delivery",
      "Improved query performance by 40% in Purchasing by redesigning Buyer component, validated via JFR profiling",
    ],
    tech: ["Java", "REST APIs", "Oracle DB", "JFR", "Performance Tuning"],
  },
  {
    role: "Software Intern",
    company: "Samsung Research",
    duration: "May 2019 — Jul 2019",
    bullets: [
      "Engineered a chatbot within the Samsung Smart Washer system, providing real-time troubleshooting and usage tips, decreasing service calls by an estimated 15% based on pilot data",
    ],
    tech: ["Chatbot", "NLP", "IoT"],
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
      "FastAPI",
      "GraphQL",
      "gRPC",
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
      "Solr",
    ],
  },
  {
    name: "AI & Data",
    skills: [
      "LLMs / RAG",
      "Embeddings",
      "Vector DBs",
      "Prompt Engineering",
      "AI Agents",
      "Apache Kafka",
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
    name: "Tooling",
    skills: [
      "GitHub Copilot",
      "Cursor AI",
      "OTel Metrics",
      "Git",
      "Postman",
      "Docker Compose",
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
    description:
      "Ranked 1st among 45+ teams in the Build AI with AI hackathon at Highspot",
    icon: "trophy",
  },
  {
    title: "CodeChef Global Rank 51",
    description:
      "Achieved 1800+ rating and a global rank of 51 in CodeChef February Lunchtime 2019",
    icon: "code",
  },
  {
    title: "National Science Olympiad",
    description:
      "Secured rank 1 nationwide in analytical and logical reasoning assessment",
    icon: "award",
  },
  {
    title: "Best Sportsman",
    description:
      "Best outgoing sportsman and best sportsman of the year, NIT Warangal 2019–20",
    icon: "medal",
  },
  {
    title: "NIT Warangal",
    description:
      "B.Tech in Computer Science from NIT Warangal, graduating with a GPA of 8.65/10",
    icon: "graduation",
  },
  {
    title: "Table Tennis",
    description:
      "State and university table tennis champion, represented NIT Warangal at national level",
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
