"use client";
import React, { Fragment } from "react";
import { experiencesData } from "@lib/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./section-header";
import { useSectionInView } from "@/lib/hook";
import { useMountedTheme } from "@lib/hook";

export default function Experience() {
  const { ref, inView } = useSectionInView("Experiences", 0.25);
  const { currentTheme, mounted } = useMountedTheme();

  if (!mounted) return null;

  return (
    <section
      id="experiences"
      ref={ref}
      className="scroll-mt-28 mb-28 relative sm:mb-40"
    >
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              key={currentTheme}
              visible={inView}
              className="vertical-timeline-element--work"
              contentStyle={{
                background:
                  currentTheme === "light"
                    ? "#fafefc"
                    : "rgb(255,255,255,0.04)",
                border:
                  currentTheme === "light"
                    ? "1px solid rgba(0,0,0,0.05)"
                    : "1px solid #703cd76f",
                boxShadow:
                  currentTheme === "light"
                    ? "0 0 10px 4px rgba(0,0,0,0.05)"
                    : "0 0 10px 4px rgba(112, 60, 215, 0.1)",
                color:
                  currentTheme === "light" ? "rgb(107, 114, 128)" : "white",
              }}
              contentArrowStyle={{
                borderRight:
                  currentTheme === "light"
                    ? "0.4rem solid #fafefc"
                    : "0.4rem solid #703cd76f",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background:
                  currentTheme === "light" ? "white" : "rgb(0,0,0,0.4)",
                color:
                  currentTheme === "light"
                    ? "#222"
                    : "rgba(255, 255, 255, 0.7)",
                fontSize: "1.5rem",
                boxShadow:
                  currentTheme === "light"
                    ? "0 0 0 5px 4px #e5e7eb"
                    : "0 0 5px 4px rgba(112, 60, 215, 0.5)",
              }}
            >
              <h3 className="font-medium text-gray-950 dark:text-white">
                {experience.title}
              </h3>
              {/* <h4 className="text-zinc-600 dark:text-zinc-300 italic text-sm">
                {experience.location}
              </h4> */}
              <p className="font-medium text-gray-700 dark:text-gray-300">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
