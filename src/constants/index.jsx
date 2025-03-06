import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.webp";
import user2 from "../assets/profile-pictures/user2.webp";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.webp";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "Daisy Edgar-Jones",
    company: "Full-Stack Developer",
    image: user1,
    text: "Echo S has completely transformed the way I code. The AI-powered assistance helps me write clean, optimized code faster than ever. It's like having a personal coding assistant 24/7!",
  },
  {
    user: "Sydney Sweeney",
    company: "Software Engineer",
    image: user2,
    text: "The automation and scripting features have saved me countless hours. I can now focus on solving real problems instead of repetitive tasks. Highly recommended!",
  },
  {
    user: "Nicolle Wallace",
    company: "Backend Developer",
    image: user3,
    text: "Debugging used to be my biggest headache, but Echo S has made it effortless. The intelligent error detection and suggestions are a lifesaver!",
  },
  {
    user: "Alice Pagani",
    company: "DevOps Engineer",
    image: user4,
    text: "Version control has never been easier! The Git integration and AI-powered recommendations make managing projects so smooth. Echo S is a must-have for any developer.",
  },
  {
    user: "Elle Fanning",
    company: "Cybersecurity Analyst",
    image: user5,
    text: "As a security-conscious developer, I love how Echo S scans for vulnerabilities and ensures compliance. It gives me peace of mind knowing my code is secure.",
  },
  {
    user: "Lana Del Rey",
    company: "Mobile App Developer",
    image: user6,
    text: "Echo S makes developing for web, mobile, and desktop a breeze. The AI suggestions help me write efficient, reusable code, saving me so much time!",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "🚀 AI-Powered Code Assistance",
    description:
      "Get real-time suggestions, auto-completions, and error detection to enhance your coding efficiency and accuracy.",
  },
  {
    icon: <Fingerprint />,
    text: "🤖 Automation & Scripting",
    description:
      "Automate repetitive tasks, generate scripts, and optimize workflows with AI-driven automation tools.",
  },
  {
    icon: <ShieldHalf />,
    text: "📂 Code Management & Version Control",
    description:
      "Seamlessly integrate with Git and manage your code versions efficiently with built-in tracking and collaboration tools.",
  },
  {
    icon: <BatteryCharging />,
    text: "⚡ Code Optimization & Refactoring",
    description:
      "Enhance code quality with AI-suggested optimizations, cleaner structures, and performance improvements.",
  },
  {
    icon: <PlugZap />,
    text: "🏗️ Seamless API Integration",
    description:
      "Easily integrate third-party APIs and streamline workflows with AI-assisted recommendations.",
  },
  {
    icon: <GlobeLock />,
    text: "🌐 Cross-Platform Development",
    description:
      "Build and test applications across multiple platforms, including web, mobile, and desktop environments.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "₹149",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Pro Max",
    price: "₹499",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
