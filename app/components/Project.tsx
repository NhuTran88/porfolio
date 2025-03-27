"use client";
import React, { useRef } from "react";
import { projectsData } from "@lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];
export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className="group mb-4 sm:mb-8 last:mb-0"
      ref={ref}
      style={{ scale: scaleProgess, opacity: opacityProgess }}
    >
      <section className="max-w-[50rem] border rounded-lg overflow-hidden sm:px-8 relative transition grp-block">
        <div className="pt-4 pb-7 px-5 sm:group-even:pl-10 sm:group-odd:pr-10 sm:px-2 sm:pt-10 flex flex-col h-full sm:group-even:ml-[17rem] sm:group-odd:mr-[17rem]">
          <h3 className="text-2xl font-semibold font-charm">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-200">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                className="px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full grp-block__item"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={`Project I work for ${title}`}
          quality={95}
          height={300}
          width={400}
          className="absolute hidden sm:block top-9 -right-40 w-[28.25rem] h-auto rounded-t-lg shadow-2xl
      transition 
      group-hover:scale-[1.04]
      group-hover:-translate-x-3
      group-hover:translate-y-3
      group-hover:-rotate-2

      group-even:group-hover:translate-x-3
      group-even:group-hover:translate-y-3
      group-even:group-hover:rotate-2

      group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
