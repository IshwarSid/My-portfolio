/* Site-wide data constants */

export const siteConfig = {
  name: "Medabalimi Eswar Prasad",
  shortName: "EP",
  title: "AI & Data Science Student",
  headline: "Building Intelligent Systems with AI.",
  subheadline:
    "AI & Data Science Student exploring AI Automations, Open Source, and Modern Web Technologies.",
  email: "medabalimieswarprasad@gmail.com",
  linkedin: "https://www.linkedin.com/in/eswar-p-3a490b2bb",
  github: "https://github.com/IshwarSid/",
  college: "Seshadri Gudlavalleru Engineering College",
  branch: "Artificial Intelligence & Data Science",
  location: "India",
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Journey", href: "/journey" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: string;
}

export const timeline: TimelineItem[] = [
  {
    year: "2022",
    title: "Started Programming",
    description:
      "Wrote my first lines of code, fell in love with logic, and began the journey into computer science.",
    icon: "🚀",
  },
  {
    year: "2022",
    title: "Learning Java",
    description:
      "Deep dive into object-oriented programming, data structures, and algorithms with Java.",
    icon: "☕",
  },
  {
    year: "2023",
    title: "Web Development",
    description:
      "Built interactive web experiences with HTML, CSS, JavaScript, and React. Discovered the joy of UI/UX.",
    icon: "🌐",
  },
  {
    year: "2023",
    title: "AI & APIs",
    description:
      "Started integrating AI APIs into projects — OpenAI, Gemini, Claude. Realized the power of intelligent systems.",
    icon: "🤖",
  },
  {
    year: "2024",
    title: "Automation & n8n",
    description:
      "Explored workflow automation with n8n, connecting tools and building intelligent pipelines.",
    icon: "⚡",
  },
  {
    year: "2024",
    title: "MCP & AI Agents",
    description:
      "Discovered Model Context Protocol and began building AI agents that interact with real-world tools.",
    icon: "🧠",
  },
  {
    year: "2025",
    title: "Open Source Journey",
    description:
      "Started contributing to open source projects and building developer tools for the community.",
    icon: "💜",
  },
  {
    year: "Now",
    title: "Current & Future",
    description:
      "Building AI-powered products, preparing for Smart India Hackathon, and aiming for impactful internships.",
    icon: "✨",
  },
];

export interface TechCategory {
  category: string;
  items: { name: string; icon: string }[];
}

export const techStack: TechCategory[] = [
  {
    category: "Programming",
    items: [
      { name: "Java", icon: "☕" },
      { name: "Python", icon: "🐍" },
      { name: "JavaScript", icon: "⚡" },
      { name: "SQL", icon: "🗃️" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: "📄" },
      { name: "CSS", icon: "🎨" },
      { name: "React", icon: "⚛️" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Firebase", icon: "🔥" },
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚂" },
    ],
  },
  {
    category: "AI & ML",
    items: [
      { name: "Gemini", icon: "💎" },
      { name: "Claude", icon: "🤖" },
      { name: "OpenAI", icon: "🧠" },
      { name: "MCP", icon: "🔗" },
      { name: "n8n", icon: "⚙️" },
      { name: "GitHub APIs", icon: "🐙" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "📦" },
      { name: "GitHub", icon: "🐙" },
      { name: "VS Code", icon: "💻" },
    ],
  },
];

export interface ExploringItem {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export const currentlyExploring: ExploringItem[] = [
  {
    title: "AI Agents",
    description:
      "Autonomous systems that reason, plan, and take actions to accomplish complex goals.",
    icon: "🤖",
    gradient: "linear-gradient(135deg, #7C5CFF22, #36C2FF11)",
  },
  {
    title: "Workflow Automation",
    description:
      "Building intelligent pipelines that connect tools and automate repetitive processes.",
    icon: "⚡",
    gradient: "linear-gradient(135deg, #36C2FF22, #7C5CFF11)",
  },
  {
    title: "Large Language Models",
    description:
      "Understanding and leveraging the capabilities of modern LLMs for practical applications.",
    icon: "🧠",
    gradient: "linear-gradient(135deg, #7C5CFF22, #FF6B9522)",
  },
  {
    title: "Model Context Protocol",
    description:
      "Connecting AI models with real-world tools and data sources through standardized protocols.",
    icon: "🔗",
    gradient: "linear-gradient(135deg, #36C2FF22, #7C5CFF22)",
  },
  {
    title: "Prompt Engineering",
    description:
      "Crafting precise instructions that unlock the full potential of AI systems.",
    icon: "✍️",
    gradient: "linear-gradient(135deg, #FF6B9522, #7C5CFF11)",
  },
  {
    title: "Developer Tools",
    description:
      "Building utilities that improve developer productivity and workflow efficiency.",
    icon: "🛠️",
    gradient: "linear-gradient(135deg, #7C5CFF11, #36C2FF22)",
  },
];

export interface ProjectItem {
  title: string;
  description: string;
  status: "In Progress" | "Planned" | "Completed";
  features: string[];
  technologies: string[];
  gradient: string;
}

export const projects: ProjectItem[] = [
  {
    title: "Carbon Credit Platform",
    description:
      "A platform for tracking and trading carbon credits with AI-powered analytics and verification.",
    status: "In Progress",
    features: [
      "AI-powered carbon tracking",
      "Real-time analytics dashboard",
      "Blockchain verification",
    ],
    technologies: ["React", "Node.js", "Python", "AI APIs"],
    gradient: "linear-gradient(135deg, #7C5CFF, #36C2FF)",
  },
  {
    title: "AI Story Generator",
    description:
      "An intelligent story generation tool that creates narratives using multiple AI models.",
    status: "In Progress",
    features: [
      "Multi-model story generation",
      "Character development AI",
      "Genre-specific training",
    ],
    technologies: ["Next.js", "OpenAI", "Claude", "Gemini"],
    gradient: "linear-gradient(135deg, #36C2FF, #7C5CFF)",
  },
  {
    title: "Portfolio Website",
    description:
      "This very website — a premium portfolio built with modern web technologies and smooth animations.",
    status: "Completed",
    features: [
      "Framer Motion animations",
      "Dark/Light theme",
      "Responsive design",
    ],
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    gradient: "linear-gradient(135deg, #7C5CFF, #FF6B95)",
  },
  {
    title: "AI Automation Workflows",
    description:
      "Collection of n8n and custom automation workflows integrating AI into daily productivity.",
    status: "In Progress",
    features: [
      "n8n pipeline templates",
      "AI-powered triggers",
      "Multi-tool integration",
    ],
    technologies: ["n8n", "MCP", "Python", "REST APIs"],
    gradient: "linear-gradient(135deg, #FF6B95, #36C2FF)",
  },
];

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: "💻",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express", "Firebase", "REST APIs"],
  },
  {
    title: "AI & ML",
    icon: "🧠",
    skills: ["Gemini", "Claude", "OpenAI", "MCP", "Prompt Engineering"],
  },
  {
    title: "Automation",
    icon: "⚡",
    skills: ["n8n", "AI Agents", "Workflow Design", "API Integration"],
  },
  {
    title: "Tools",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "Linux", "Docker"],
  },
];
