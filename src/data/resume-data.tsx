import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  EmojiKitchenSaver,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  MeteorClient,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  NotionAvatar,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Vo Hoang Duc Khoa",
  initials: "DK",
  location: "Ho Chi Minh, Vietnam, ICT",
  locationLink: "https://www.google.com/maps/place/Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh",
  about:
    "Software Engineer specializes in frontend and web development",
  summary:
    "My name is Vo Hoang Duc Khoa, a software engineer who specializes in frontend and web development. My project portfolio includes a wide range of applications, from dashboard to complex animations and pixel perfect Ul.\n \n I am also passionate about learning and constantly updating myself with the latest technologies to ensure that Ican provide the best solutions for my clients.",
  avatarUrl: "https://avatars.githubusercontent.com/u/54369632",
  personalWebsiteUrl: "https://duckhoa.dev",
  contact: {
    email: "duckhkoa.dev@gmail.com",
    tel: "+84773620377",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/duckhoa-uit",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/duckhoa-se/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/duckhoadotdev",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Information Technology",
      degree: "Bachelor's Degree in Software Engineering",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "TISOHA Software Solutions",
      link: "https://tisoha.com",
      badges: [],
      title: "Junior Frontend Developer → Full Stack Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        "Built company website, created and maintained company's product and outsource software. Led squad, worked on improving the way team members ship the code and more. Technologies: React, Next.js, TypeScript, RestfulAPI, ...",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "React Native",
    "Tailwindcss",
    "Node.js",
    "RestfulAPI",
    "Monorepo",
    "Browser Extension",
    "Tauri",
    "CI/CD",
    "Docker",
  ],
  projects: [
    {
      title: "Emoji Kitchen Saver",
      techStack: [
        "Side Project",
        "TypeScript",
        "React.js",
        "Browser Extension",
        "Monorepo",
      ],
      description: "Chrome extension to help people to save mixed emoji from Google into a collection and copy whenever they like",
      logo: EmojiKitchenSaver,
      link: {
        label: "Emoji Kitchen Saver",
        href: "https://chromewebstore.google.com/detail/hboaodokeiekbeolfmidejengchnlafa",
      },
    },
    {
      title: "Meteor Client",
      techStack: ["Side Project", "Open source", "TypeScript", "Tauri", "Application"],
      description:
        "An desktop application that help developer community interact with backend using Meteor.js",
      logo: MeteorClient,
      link: {
        label: "github.com",
        href: "https://github.com/duckhoa-uit/meteor-client/releases/tag/v0.1.0",
      },
    },
    {
      title: "Duckhoa.dev",
      techStack: ["Side Project", "Next.js", "Typescript"],
      description:
        "My personal website and blog. Built with Next.js and TailwindCSS",
      logo: NotionAvatar,
      link: {
        label: "github.com",
        href: "https://duckhoa.dev/",
      },
    },
    {
      title: "OnApp",
      techStack: ["Side Project", "React Native", "Typescript"],
      description:
        "OnApp is a mobile application that helps patients having mental health problems book meetings with doctors or consultant",
      logo: Howdy,
      link: {
        label: "github.com",
        href: "https://github.com/duckhoa-uit/OnApp-Mobile",
      },
    },
    {
      title: "Mark",
      techStack: [
        "Frontend Developer",
        "Javascript",
        "React",
        "MaterialUI",
        "Redux",
        "RestfulAPI",
      ],
      description:
        "Mark is a platform for businesses and designers to showcase their works and for homeowners to find them",
      logo: ParabolLogo,
      link: {
        label: "Made the Mark",
        href: "https://madethemark.com/",
      },
    },
    {
      title: "Iyyara.io",
      techStack: [
        "Fullstack Developer",
        "TypeScript",
        "React",
        "Next.js",
        "MeteorJS",
        "Prisma",
        "Docker",
      ],
      description:
        "Iyyara mobile is an app that verifies halal food options (eateries, online businesses, caterers and more) before publishing them.",
      logo: EvercastLogo,
      link: {
        label: "Iyyara.io",
        href: "https://iyyara.io/",
      },
    },
    {
      title: "Salestime",
      techStack: ["Frontend Developer", "React.js", "shadCN", "radixUI"],
      description:
        "A comprehensive Enterprise Resource Planning solution designed to streamline and optimize business operations. This system offers a unified platform to manage various aspects of your organization, from finance and human resources to supply chain and customer relationship management.",
      logo: MobileVikingsLogo,
    },
  ],
} as const;
