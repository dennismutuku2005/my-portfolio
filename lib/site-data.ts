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
      github: "https://github.com/dennismutuku2005",
      live: "https://quickzingo.com",
    },
    {
      id: "One-PPPoe",
      title: "One-PPPoe",
      description:
        "A modern PPPoE management system with user-friendly interface, bandwidth monitoring, and seamless integration with MikroTik routers and payment over mpesa paybill.",
      screenshot: "/onepppoe.png",
      techStack: ["Next.js", "Php", "Node.js", "Redis", "Mysql","MikroTik","OpenVPN"],
      github: "https://github.com/dennismutuku2005",
      live: "https://pppoe.onenetwork-system.com/",
    },
    {
      id: "Pre-order system for Restaurants",
      title: "OneWay Restaurants",
      description: "A pre-ordering system for restaurants that allows customers to place orders in advance, reducing wait times and improving service efficiency",
      screenshot: "/chat-application-dark-theme-neon-blue-interface.jpg",
      techStack: ["Flutter", "Node.js", "Socket.io", "Mysql", "Dart"],
      github: "https://github.com/dennismutuku2005",
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
