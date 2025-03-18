"use client";
import React from "react";
import Image from "next/image";
import IntroImage from "@public/IMG_5023.jpg";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { useSectionInView } from "@/lib/hook";
import { useActiveSectionContext } from "@/context/active-section-context";
import { SectionName } from "@/lib/type";

export default function Intro() {
  const { ref } = useSectionInView("/");
  const { setActiveSection, setLastOfClick } = useActiveSectionContext();

  const handleClick = (section: SectionName) => {
    setLastOfClick(Date.now());
    setActiveSection(section);
  };
  return (
    <section
      id="home"
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex flex-col items-center justify-center">
        <motion.div
          className=""
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src={IntroImage}
            alt="My Image"
            width={100}
            height={100}
            priority={true}
            className="rounded-full w-28 h-28 object-cover border-[0.35rem] border-white shadow-lg"
          />
        </motion.div>
        <div className="px-8 pt-4">
          <motion.p
            className="text-lg block mb-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
          >
            Hello, I&#39;m{" "}
          </motion.p>
          <h1 className="text-2xl mb-4 heading-text ">
            <TypeAnimation
              sequence={[
                "Nhu Tran",
                1000, // wait 1s before replacing next text
                "Frontend Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1.5em",
                display: "inline-block",
                lineHeight: 1,
              }}
              repeat={Infinity}
              className="bg-transparent"
            />
          </h1>
          <motion.div
            className="text-base mx-auto lg:w-1/2 sm:text-2xl lg:text-lg font-normal !leading-[1.5] mb-8"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
          >
            <p>
              I enjoy building&nbsp;
              <span className="font-bold italic">sites and apps</span>
              &nbsp;focusing on&nbsp;
              <span className="font-bold underline">
                modern JavaScript frameworks.
              </span>
              &nbsp;work with passion and learning new things to improve myself
            </p>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group btn btn-primary"
          onClick={() => {
            setLastOfClick(Date.now());
            handleClick("Contact");
          }}
        >
          Contact me <BsArrowRight className="btn-animation" />
        </Link>
        <Link className="group btn btn-secondary" href="/CV.pdf" download>
          Download CV <HiDownload className="btn-animation" />
        </Link>
        <Link
          className="btn btnIcon"
          href="https://www.linkedin.com/in/nhu-tran-26930893/"
          target="_blank"
        >
          <BsLinkedin />
        </Link>

        <Link className="btn btnIcon" href="https://github.com" target="_blank">
          <FaGithubSquare />
        </Link>
      </motion.div>
    </section>
  );
}
