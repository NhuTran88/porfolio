"use client";
import React, { useContext, useState } from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Outfit } from "next/font/google";
import { useActiveSectionContext } from "@context/active-section-context";

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export default function Header() {
  const { activeSection, setActiveSection, setLastOfClick } =
    useActiveSectionContext();
  return (
    <header
      className={`${outfit.className} z-[999] fixed top-[1.7rem] left-0 bottom-0 right-0 with-full h-14`}
    >
      {/* <motion.div
        className=" rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div> */}
      <motion.section
        className="rounded-full mx-auto p-2 w-fit h-[initial] navigation"
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav className="">
          <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                className="h-3/4 flex gap-2 items-center justify-center"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx("menu-item", {
                    "menu-item-active": activeSection === link.name,
                  })}
                  href={link.hash}
                  onClick={() => {
                    setLastOfClick(Date.now());
                    setActiveSection(link.name);
                  }}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.section>
    </header>
  );
}
