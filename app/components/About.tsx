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
      <p className="text-base lg:text-lg font-normal mb-8">
        I have 5 years experience in modern javascript frameworks like Angular,
        Extjs and React. Reach out to me if you would like to learn more about
        my work. I have experience working with JavaScript, HTML5, CSS3, RESTful
        APIs and Git. I am a quick learner and I am always looking to expand my
        knowledge and skill set. I am excited to work with others to create
        amazing applications.
      </p>
    </motion.section>
  );
};

export default About;
