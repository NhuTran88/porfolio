"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-header";
import { useSectionInView } from "@lib/hook";

const About = () => {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      className="mb-8 px-10 max-w-[45rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="text-base font-normal mb-8">
        I have over 10 years of experience specializing in UI/UX development and
        a strong focus on crafting seamless, user-friendly interfaces. In recent
        years, I&apos;ve been working extensively with modern JavaScript
        frameworks like Angular, React, Next, building scalable and
        high-performance web applications. My passion lies in creating intuitive
        digital experiences that blend design and functionality. I thrive on
        solving complex frontend challenges and continuously evolving with new
        technologies
      </p>
    </motion.section>
  );
};

export default About;
