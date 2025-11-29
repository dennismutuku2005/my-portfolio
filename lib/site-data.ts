export const siteData = {
  siteTitle: "Dennis Muuo | Developer Portfolio",
  name: "Dennis Muuo",
  tagline: "Full-Stack Developer & Digital Architect | Building the future, one line of code at a time",
  portrait: "/futuristic-developer-portrait-cyberpunk-blue-glow.jpg",
  github: "https://github.com/dennismuuo",
  bio: "I'm Dennis Muuo, a passionate full-stack developer specializing in building exceptional digital experiences. With expertise spanning modern web technologies, cloud architecture, and AI integration, I transform complex problems into elegant solutions. My code is clean, my designs are intuitive, and my coffee is strong.",
  contactEmail: "dennis@muuo.dev",
  copyright: "© 2025 Dennis Muuo. All rights reserved. Built with passion and precision.",

  projects: [
    {
      id: "neural-dashboard",
      title: "Neural Dashboard",
      description:
        "AI-powered analytics platform with real-time data visualization, predictive modeling, and automated insights generation.",
      screenshot: "/futuristic-ai-dashboard-dark-theme-blue-neon.jpg",
      techStack: ["React", "TypeScript", "Python", "TensorFlow", "PostgreSQL"],
      github: "https://github.com/dennismuuo/neural-dashboard",
      live: "https://neural.dennismuuo.dev",
    },
    {
      id: "quantum-cms",
      title: "Quantum CMS",
      description:
        "Next-generation headless CMS with GraphQL API, real-time collaboration, and edge deployment capabilities.",
      screenshot: "/modern-cms-interface-dark-blue-theme.jpg",
      techStack: ["Next.js", "GraphQL", "Prisma", "Redis", "Docker"],
      github: "https://github.com/dennismuuo/quantum-cms",
      live: "https://quantum.dennismuuo.dev",
    },
    {
      id: "cyber-commerce",
      title: "Cyber Commerce",
      description:
        "High-performance e-commerce platform with AI-driven recommendations, real-time inventory, and seamless payments.",
      screenshot: "/futuristic-ecommerce-platform-dark-cyber-theme.jpg",
      techStack: ["Next.js", "Stripe", "MongoDB", "Redis", "AWS"],
      github: "https://github.com/dennismuuo/cyber-commerce",
      live: "https://shop.dennismuuo.dev",
    },
    {
      id: "synth-chat",
      title: "Synth Chat",
      description: "Real-time messaging platform with end-to-end encryption, AI moderation, and custom bot framework.",
      screenshot: "/chat-application-dark-theme-neon-blue-interface.jpg",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Docker"],
      github: "https://github.com/dennismuuo/synth-chat",
      live: "https://chat.dennismuuo.dev",
    },
  ],

  education: [
    {
      id: "masters",
      year: "2023 - Present",
      degree: "M.Sc. Computer Science",
      institution: "Tech University",
      description: "Specializing in Machine Learning and Distributed Systems",
    },
    {
      id: "bachelors",
      year: "2019 - 2023",
      degree: "B.Sc. Software Engineering",
      institution: "Digital Academy",
      description: "Graduated with First Class Honors, Dean's List recipient",
    },
    {
      id: "certification",
      year: "2022",
      degree: "AWS Solutions Architect",
      institution: "Amazon Web Services",
      description: "Professional certification in cloud architecture and design",
    },
  ],

  stack: [
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "TypeScript", category: "language" },
    { name: "Node.js", category: "backend" },
    { name: "Python", category: "language" },
    { name: "PostgreSQL", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "Redis", category: "database" },
    { name: "Docker", category: "devops" },
    { name: "AWS", category: "cloud" },
    { name: "GraphQL", category: "api" },
    { name: "Tailwind", category: "frontend" },
    { name: "Prisma", category: "backend" },
    { name: "Git", category: "devops" },
  ],

  // Hidden features / easter eggs
  secretCommands: [
    { command: "matrix", description: "Toggle enhanced matrix rain" },
    { command: "hack", description: "Trigger hacking animation" },
    { command: "dennis", description: "Show secret message" },
    { command: "coffee", description: "Coffee break animation" },
    { command: "help", description: "Show all commands" },
  ],
}

export type SiteData = typeof siteData
