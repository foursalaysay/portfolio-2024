"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import logo from "./../../../public/kyle.svg";

// COMPONENTS
import { Navbar } from "@/components/reusables/index";

export default function HomePage() {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 500,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };
  return (
    <motion.div variants={variants} className="w-screen h-screen flex flex-col justify-start items-center">
      <Navbar />

      <Image
        src={logo}
        height={500}
        width={500}
        className="w-50% rounded border-2"
        alt="image"
      />
      <h1>John Kyle Salaysay</h1>
    </motion.div>
  );
}
