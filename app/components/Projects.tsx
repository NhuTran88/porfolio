"use client";
import React, { Fragment } from "react";
import SectionHeading from "./section-header";
import { projectsData } from "@lib/data";
import Project from "./Project";
import { useSectionInView } from "@lib/hook";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.25);
  return (
    <section id="projects" ref={ref} className="scroll-mt-28 mb-28 px-8">
      <SectionHeading>My Projects</SectionHeading>
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </section>
  );
}
