import {
  aboutData,
  achievementsData,
  experienceData,
  heroData,
  siteConfig,
  skillsData,
} from "@/data/content";
import {
  resumePageCount,
  resumeSourceUrl,
  resumeSyncedAt,
  resumeText,
} from "@/data/resume.generated";

/**
 * Canonical facts the assistant may use.
 * Portfolio facts come from content.ts.
 * Resume facts come from resume.generated.ts (refresh with `npm run sync:resume`).
 */
export function buildKnowledgeBase(): string {
  const experience = experienceData
    .map(
      (job) =>
        `### ${job.role} — ${job.company} (${job.duration})\n` +
        job.bullets.map((b) => `- ${b}`).join("\n") +
        `\nTech: ${job.tech.join(", ")}`
    )
    .join("\n\n");

  const skills = skillsData
    .map((cat) => `- ${cat.name}: ${cat.skills.join(", ")}`)
    .join("\n");

  const achievements = achievementsData
    .map((a) => `- ${a.title}: ${a.description}`)
    .join("\n");

  const stats = aboutData.stats
    .map((s) => `- ${s.value} — ${s.label}`)
    .join("\n");

  return `
# Profile
Name: ${siteConfig.name}
Title: ${siteConfig.title}
Location (portfolio site): ${siteConfig.location}
Years of experience: ~6 years (backend / platform engineering)
Education: B.Tech Computer Science, NIT Warangal (GPA 8.65/10)
Current employer: ABCFitness (Senior Software Developer, Sep 2025 — Present)
Previous employers: Highspot (SDE II L2), Oracle (Application Engineer), Samsung Research Bangalore (Software Intern)

# Contact (use when unsure or when the visitor wants to reach out)
Email: ${siteConfig.email}
Phone: ${siteConfig.phone}
LinkedIn: ${siteConfig.social.linkedin}
GitHub: ${siteConfig.social.github}
LeetCode: ${siteConfig.social.leetcode}
Resume: ${siteConfig.resumeUrl}

# Positioning
${heroData.tagline}

# About
${aboutData.paragraphs.join("\n\n")}

# Highlights
${stats}

# Experience (portfolio)
${experience}

# Skills (portfolio)
${skills}

# Achievements (portfolio)
${achievements}

# Interests
Table tennis (state and university champion; represented NIT Warangal nationally). Competitive programming (CodeChef).

# Resume (verified extract)
This section is the authoritative source for "resume" questions. It is auto-synced from the Google Drive PDF.
- Source URL: ${resumeSourceUrl}
- Last synced: ${resumeSyncedAt}
- Pages: ${resumePageCount}
- Portfolio location field: ${siteConfig.location}

If a detail is not present in the extract below, say clearly that it is not listed on the resume — do not invent it.

${resumeText}

# Coverage notes
This knowledge base is the combined portfolio + resume source of truth. It does not include confidential project internals, compensation, interview performance, or personal life details beyond what is written above.
`.trim();
}

export const CONTACT_FALLBACK = `I don't have enough verified information on that to answer confidently. Feel free to reach out directly:

Email: ${siteConfig.email}
LinkedIn: ${siteConfig.social.linkedin}`;

export const SUGGESTED_PROMPTS = [
  "What is Ashish's background?",
  "Summarize his recent experience",
  "What technologies does he work with?",
  "How can I get in touch?",
] as const;
