import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { DiSenchatouch } from "react-icons/di";
// import { LuGraduationCap } from "react-icons/lu";
import { IoLogoAngular } from "react-icons/io";
import { DiJoomla } from "react-icons/di";
import TendImg from "@public/Tend.png";
import educationImg from "@public/education.png";
import nbrImg from "@public/nbr.png";
import healthcareImg from "@public/healthcare.png";

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
    title: "Frontend Developer",
    description:
      "I'm now a frontend developer working as a freelancer. My stack includes React, TypeScript, Tailwind. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Senior Frontend Developer",
    description:
      "I worked as a front-end developer for over 1 year. I also upskilled to components, solving problems and research",
    icon: React.createElement(DiSenchatouch),
    date: "2021 - 2022",
  },
  {
    title: "Front-End Developer",
    description:
      "I worked as a front-end developer for 5 years. I also upskilled to the front-end with mordern Javascript framework.",
    icon: React.createElement(IoLogoAngular),
    date: "2016 - 2021",
  },
  {
    title: "Associate Developer",
    description:
      "I worked as a UI developer for 3 years. I also upskilled responsive design principles and communicated with back-end APIs.",
    icon: React.createElement(CgWorkAlt),
    date: "2013 - 2015",
  },
  {
    title: "Web Developer",
    description:
      "I worked as a web developer for 3 years. Collaborate with backend teams to built template, plugins modules for Joomla CMS",
    icon: React.createElement(DiJoomla),
    date: "2010 - 2013",
  },
] as const;

export const projectsData = [
  {
    title: "Healthcare",
    description:
      "Job board for freelancer developer jobs. Built a WordPress website for content management, emphasizing performance optimization and best practices.",
    tags: ["Wordpress", "HTML", "CSS", "Javascript"],
    imageUrl: healthcareImg,
  },
  {
    title: "NBR",
    description:
      "I was the front-end developer. It has features like filtering, sorting, pagination, dashboard and chart.",
    tags: [
      "Extjs",
      "javascript",
      "SVN",
      "PostgreSQL",
      "Spring Framework",
      "Spring Boot",
      "Bootstrap",
      "Jira",
    ],
    imageUrl: nbrImg,
  },
  {
    title: "Tend",
    description:
      "I was front-end developer. It has feature map, calendar, and chart, subscription and payment",
    tags: ["AngularJS", "Git", "Jenkins", "Bitbucket", "bootstrap", "LESS"],
    imageUrl: TendImg,
  },
  {
    title: "Education",
    description:
      "A public web app for education. It provide information about their outdoor and environmental education programs",
    tags: [
      "HTML",
      "LESS",
      "Media queries",
      "Javascript",
      "PHP framework",
      "Jquery",
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
  "AngularJS",
  "ExtJS",
  "RESTful",
  "Git",
  "SVN",
  "Tailwind",
  "Bootstrap",
  "Material UI",
  "Tailwind",
  "SASS/LESS",
  "Jenkin",
  "Jira",
  "Figma",
  "Zeplin",
  "Skectch",
] as const;
