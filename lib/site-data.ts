export const siteData = {
  siteTitle: "Dennis Muuo | Developer Portfolio",
  name: "Dennis Muuo",
  tagline: "Full-Stack Developer | ML-AI | Network Architecture",
  portrait: "/mydp.jpeg",
  github: "https://https://github.com/dennismutuku2005",
  bio: "I'm Dennis Muuo, a full-stack developer specializing in building exceptional digital experiences. With expertise spanning modern web technologies, cloud architecture, and AI integration, I am able to transform complex problems into elegant solutions. My code is clean and my coffee is strong.",
  contactEmail: "dennismuuo.dev@gmail.dev",
  copyright: "© 2025 Dennis Muuo. All rights reserved.",

  projects: [
    {
      id: "Quickzingo Deliveries",
      title: "Quickzingo Deliveries",
      description:
        "A full system for managing deliveries, featuring real-time tracking, route optimization, and automated notifications.",
      screenshot: "/quickzingo.png",
      techStack: ["React", "jsx", "php", "js", "MySQL"],
      github: "https://github.com/dennismuuo2005",
      live: "https://quickzingo.com",
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
      id: "B.Tech",
      year: "2023 - Present",
      degree: "B.Tech . Information Technology",
      institution: "Technical University of Kenya",
      description: "Currently pursuing a degree in information technology with a focus on software development and network architecture",
    },
    {
      id: "Certificate",
      year: "2023",
      degree: "Flutter Development Bootcamp",
      institution: "Uniathena",
      description: "Intensive bootcamp covering mobile app development using Flutter and Dart",
    },
    {
      id: "certification",
      year: "2023-2024",
      degree: "AI and Machine Learning Professional Certificate",
      institution: "Uniathena",
      description: "Comprehensive program on AI and machine learning concepts, algorithms, and applications",
    },
  ],

  stack: [
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "TypeScript", category: "language" },
    { name: "Node.js", category: "backend" },
    { name: "Python", category: "language" },
    { name: "flutter", category: "frontend" },
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
