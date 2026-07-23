export const mausamSiteConfig = {
  name: "Mausam Sinha",
  title: "Supply Chain Manager",
  email: "mausamsinha20@gmail.com",
  phone: "+91 62019 64258",
  location: "Baddi, Himachal Pradesh, India",
  resumeUrl: "https://www.linkedin.com/in/mausam-sinha-iitkgp/",
  social: {
    linkedin: "https://www.linkedin.com/in/mausam-sinha-iitkgp/",
  },
};

export const mausamHeroData = {
  greeting: "Hi, I'm",
  name: "Mausam Sinha",
  title: "Supply Chain Manager",
  subtitle: "Technical Program Management · Production Planning",
  tagline:
    "IIT Kharagpur Chemical Engineer driving plant-level production planning, process excellence, and multimillion-dollar savings at Procter & Gamble. I turn complex operations into reliable, data-backed systems.",
  cta: {
    primary: { label: "Get in Touch", href: "#contact" },
    secondary: { label: "View Experience", href: "#experience" },
  },
  terminal: {
    command: "cat profile.json",
    output: `{
  "role": "Supply Chain Manager",
  "company": "Procter & Gamble",
  "focus": ["S&OP", "Zero-Touch Planning", "APC"],
  "impact": "$950K+ cost savings",
  "education": "IIT Kharagpur · CGPA 8.58",
  "stack": ["Python", "openLCA", "S&OP"]
}`,
  },
};

export const mausamAboutData = {
  paragraphs: [
    "I'm a Supply Chain and Operations professional with 2.5+ years leading plant-level production planning, process excellence, and cross-functional teams at Procter & Gamble Fabric Care, Baddi. My work sits at the intersection of operations, data, and program delivery — from monthly S&OP cycles to global pilots in advanced process control.",
    "Most recently, I led a team of 16 to deliver a #2 ranking among Global Fabric Care plants, unlocking over 7% Plant Cost Conversion savings and $950K in total cost savings. I also spearheaded global pilots of Advance Control and Feed Master (Zero-Touch Planning), cutting manual touchpoints by 95% and delivering another $200K in savings.",
    "I graduated from IIT Kharagpur with an M.Tech Dual Degree in Chemical Engineering (CGPA 8.58/10). Beyond the plant floor, I bring a strong analytical foundation in life cycle assessment, process optimization, and applied data science — and I'm looking for roles in Supply Chain Management, Technical Program Management, or Production/Demand Planning.",
  ],
  stats: [
    { value: "2.5+", label: "Years Experience" },
    { value: "$950K", label: "Cost Savings Led" },
    { value: "95%", label: "Touchpoint Reduction" },
    { value: "16", label: "Team Members Led" },
  ],
};

export interface MausamExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  bullets: string[];
  tech: string[];
}

export const mausamExperienceData: MausamExperienceItem[] = [
  {
    role: "Supply Chain Manager – Fabric Care",
    company: "Procter & Gamble",
    location: "Baddi, India",
    duration: "May 2024 — Present",
    bullets: [
      "Lead a cross-functional team of 16 to deliver #2 ranking among Global Fabric Care plants, achieving over 7% Plant Cost Conversion (PCC) savings and $950K in total cost savings",
      "Spearheaded the global pilot of Advance Control release for Fabric Care, reducing pre-release product testing time and delivering $200K in savings",
      "Led the global pilot of Feed Master (Zero-Touch Planning), automating the workflow from planning to packing and achieving a 95% reduction in manual touchpoints",
      "Drive monthly S&OP cycles and production scheduling — balancing demand forecasts against capacity and raw material availability to ensure OTIF supply while optimizing inventory",
    ],
    tech: [
      "S&OP",
      "Production Planning",
      "Zero-Touch Planning",
      "Advanced Process Control",
      "TPM",
      "Cost Reduction",
    ],
  },
  {
    role: "Corporate Research & Development Intern – Life Cycle Assessment",
    company: "Bharat Petroleum Corporation Ltd. (BPCL)",
    location: "Uttar Pradesh, India",
    duration: "May 2022 — Jul 2022",
    bullets: [
      "Conducted a cradle-to-gate life cycle assessment using openLCA, quantifying CO₂-equivalent emissions for 1G and 2G ethanol production pathways",
      "Completed a life cycle impact assessment for bioethanol production from rice straw and benchmarked results against diesel and petrol",
    ],
    tech: ["openLCA", "Life Cycle Assessment", "Sustainability", "Biofuels"],
  },
  {
    role: "Graduate Rotational Intern (Data Science)",
    company: "The Sparks Foundation",
    location: "Remote",
    duration: "Jun 2021 — Aug 2021",
    bullets: [
      "Applied K-Means clustering for customer segmentation and exploratory data analysis, generating insights that enhanced targeted marketing strategy",
      "Built and validated predictive models, including a Random Forest model (81% accuracy) for stock price trend analysis and a Decision Tree classifier (93% accuracy)",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "K-Means", "Random Forest"],
  },
];

export interface MausamEducationItem {
  degree: string;
  institution: string;
  year: string;
  score: string;
  detail?: string;
}

export const mausamEducationData: MausamEducationItem[] = [
  {
    degree: "M.Tech Dual Degree (5Y), Chemical Engineering",
    institution: "Indian Institute of Technology (IIT) Kharagpur",
    year: "2019 — 2024",
    score: "CGPA 8.58 / 10",
    detail: "B.Tech + M.Tech integrated dual degree program",
  },
  {
    degree: "Higher Secondary (Class XII), CBSE",
    institution: "Tender Heart Senior Secondary School",
    year: "2018",
    score: "93.6%",
  },
  {
    degree: "Secondary (Class X), CBSE",
    institution: "Tender Heart Senior Secondary School",
    year: "2016",
    score: "10 / 10",
  },
];

export interface MausamProject {
  title: string;
  org: string;
  duration: string;
  bullets: string[];
  tech: string[];
}

export const mausamProjectsData: MausamProject[] = [
  {
    title: "Master's Thesis — Reduction of Dendrite Growth in Electrochemical Cells",
    org: "Prof. Sunando Dasgupta · IIT Kharagpur",
    duration: "Aug 2023 — 2024",
    bullets: [
      "Studied waveform effects on electrodeposition dynamics using a Cu–Cu electrochemical cell model",
      "Evaluated metal and flow-rate combinations to reduce dendrite formation, improving battery safety and lifespan",
    ],
    tech: ["Electrochemistry", "Experimental Design", "Battery Safety"],
  },
  {
    title: "Computational Modelling of Multiphase Flow Systems",
    org: "IIT Kharagpur",
    duration: "2022 — 2023",
    bullets: [
      "Simulated multiphase flow behavior using OpenFOAM to analyze mixing and transport phenomena in process equipment",
      "Validated CFD results against analytical benchmarks to inform equipment design decisions",
    ],
    tech: ["OpenFOAM", "CFD", "Multiphase Flow"],
  },
  {
    title: "Molecular Dynamics of Polymer Nanocomposites",
    org: "IIT Kharagpur",
    duration: "2021 — 2022",
    bullets: [
      "Ran LAMMPS molecular dynamics simulations to study interfacial behavior in polymer–nanoparticle systems",
      "Extracted structural and thermal property trends to support materials selection for advanced composites",
    ],
    tech: ["LAMMPS", "Molecular Dynamics", "Materials Science"],
  },
  {
    title: "Process Simulation & Optimization",
    org: "IIT Kharagpur",
    duration: "2020 — 2021",
    bullets: [
      "Modeled unit operations and plant flowsheets in ASPEN and DWSIM for separation and reaction systems",
      "Performed sensitivity and what-if analyses to identify energy and yield improvement opportunities",
    ],
    tech: ["ASPEN", "DWSIM", "Process Design"],
  },
];

export interface MausamSkillCategory {
  name: string;
  skills: string[];
}

export const mausamSkillsData: MausamSkillCategory[] = [
  {
    name: "Supply Chain & Ops",
    skills: [
      "Production Planning",
      "S&OP",
      "Demand Planning",
      "Inventory Optimization",
      "OTIF Delivery",
      "TPM / Process Excellence",
    ],
  },
  {
    name: "Program & Leadership",
    skills: [
      "Technical Program Mgmt",
      "Cross-Functional Leadership",
      "Stakeholder Management",
      "Global Pilot Programs",
      "Change Management",
      "Continuous Improvement",
    ],
  },
  {
    name: "Analytics & Automation",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Zero-Touch Planning",
      "Advanced Process Control",
    ],
  },
  {
    name: "Engineering Tools",
    skills: [
      "openLCA",
      "ASPEN",
      "DWSIM",
      "MATLAB",
      "SolidWorks",
      "LAMMPS",
    ],
  },
  {
    name: "Data Visualization",
    skills: ["Matplotlib", "Plotly", "Seaborn", "Excel / Dashboards"],
  },
  {
    name: "Programming",
    skills: ["Python", "C++", "C", "HTML", "SQL basics"],
  },
];

export interface MausamAchievement {
  title: string;
  description: string;
  icon: string;
}

export const mausamAchievementsData: MausamAchievement[] = [
  {
    title: "MITACS Globalink Scholar",
    description:
      "Awarded the MITACS Globalink Research Internship (GRI) 2023 scholarship (9,000 CAD), selected among applicants from 17 countries",
    icon: "globe",
  },
  {
    title: "Elsevier Book Chapter",
    description:
      'First author of a book chapter on Catalytic Hydrodeoxygenation, forthcoming in "Emerging Biofuels" (Elsevier)',
    icon: "book",
  },
  {
    title: "General Secretary, ChEA",
    description:
      "Led Chemical Engineering Association at IIT Kharagpur — flagship industry-academia event (₹4L budget, 1,000+ registrations) and Climate Science Olympiad ($10K prize pool)",
    icon: "users",
  },
  {
    title: "Data-Fizz Top 5%",
    description:
      "Ranked in the top 5% of 1,300+ participants at Data-Fizz, a national-level data science competition",
    icon: "trophy",
  },
  {
    title: "IIT Kharagpur",
    description:
      "M.Tech Dual Degree in Chemical Engineering from IIT Kharagpur with a CGPA of 8.58/10",
    icon: "graduation",
  },
  {
    title: "Global Plant Ranking #2",
    description:
      "Drove Fabric Care plant to #2 among Global Fabric Care plants with 7%+ PCC savings under P&G leadership",
    icon: "target",
  },
];

export const mausamNavLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Highlights", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
