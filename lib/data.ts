import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { DiSenchatouch } from "react-icons/di";
// import { LuGraduationCap } from "react-icons/lu";
import { IoLogoAngular } from "react-icons/io";
import { DiJoomla } from "react-icons/di";
import TendImg from "@public/Tend.png";
import educationImg from "@public/education.png";
import nbrImg from "@public/nbr.jpg";
// import healthcareImg from "@public/healthcare.png";
import nongsanImg from "@public/nongsan.png";
import porfImg from "@public/porfolio.png";

export const links = [
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiences",
    hash: "#experiences",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelancer Frontend Developer",
    description:
      "Took gap years to reset, focus on learning, and care for my family. During this time, I expanded my technical expertise, explored new opportunities, and worked as a freelance developer to refine my skills with modern web technologies. Open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Gap Years & Freelancing (2023 - Present)",
  },
  {
    title: "Senior Frontend Developer",
    description:
      "Worked as a senior frontend developer for over a year, focusing on component-based architecture, problem-solving, and research-driven improvements in frontend technologies.",
    icon: React.createElement(DiSenchatouch),
    date: "2021 - 2022",
  },
  {
    title: "Front-End Developer",
    description:
      "Designed and developed interactive web applications using modern JavaScript frameworks for 5 years. Specialized in building dynamic, responsive UI components with Angular while optimizing performance and user experience.",
    icon: React.createElement(IoLogoAngular),
    date: "2016 - 2021",
  },
  {
    title: "Associate Developer",
    description:
      "Worked as a UI developer for 3 years, focusing on responsive design principles and front-end development. Collaborated closely with backend teams to integrate APIs, enhancing web application functionality and performance.",
    icon: React.createElement(CgWorkAlt),
    date: "2013 - 2015",
  },
  {
    title: "Web Developer",
    description:
      "Developed and maintained web applications using Joomla CMS for 3 years. Built custom templates, plugins, and modules while collaborating with backend teams to create scalable and efficient solutions.",
    icon: React.createElement(DiJoomla),
    date: "2010 - 2013",
  },
] as const;

export const projectsData = [
  {
    title: "Nongsan",
    description:
      "A full-stack product management system designed for seamless product data management. It features an admin panel for adding, editing, and updating products, along with QR code generation for product labels. Customers can scan these QR codes to instantly access detailed product information.",
    tags: ["Next.js", "Auth", "Prisma", "SQL", "Tailwind", "Vercel", "Git"],
    imageUrl: nongsanImg,
  },
  {
    title: "Portfolio",
    description:
      "A personal portfolio website built with Next.js, showcasing projects and experience. It features a sleek dark mode, smooth scrolling, and an interactive starry background for a visually engaging experience.",
    tags: ["Next.js", "Tailwind", "Vercel", "Git", "Three.js", "Framer Motion"],
    imageUrl: porfImg,
  },
  {
    title: "NBR",
    description:
      "Worked as a front-end developer on a backup and replication application. Implemented features such as advanced filtering, sorting, pagination, and interactive dashboards with real-time charts for data visualization.",
    tags: [
      "ExtJS",
      "JavaScript",
      "Bootstrap",
      "PostgreSQL",
      "Jira",
      "Spring Boot",
      "Spring Framework",
    ],
    imageUrl: nbrImg,
  },
  {
    title: "Tend",
    description:
      "Developed key front-end features for a farm management platform. Integrated interactive maps, calendar scheduling, dynamic charts, and a subscription-based payment system to enhance user experience.",
    tags: ["AngularJS", "Git", "Jenkins", "Bitbucket", "Bootstrap", "LESS"],
    imageUrl: TendImg,
  },
  {
    title: "Education",
    description:
      "A public web application designed to provide information about outdoor and environmental education programs. Focused on responsive design, interactive content, and seamless user experience across all devices.",
    tags: [
      "HTML",
      "LESS",
      "Media Queries",
      "JavaScript",
      "PHP Framework",
      "jQuery",
      "AJAX",
    ],
    imageUrl: educationImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "jQuery",
  "React",
  "Next.js",
  "AngularJS",
  "ExtJS",
  "RESTful",
  "GIT",
  "SVN",
  "Tailwind",
  "Bootstrap",
  "Material UI",
  "SASS/LESS",
  "Jenkin",
  "Jira",
  "Figma",
  "Zeplin",
] as const;
