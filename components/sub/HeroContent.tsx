"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { RocketLaunchIcon, SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial=""
      animate="visible"
      className="flex flex-row items-center justify-center px-20  w-full z-[20] bg-[#03001417] backdrop-blur-lg h-screen mb-40 ml-5"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box rounded-lg py-[8px] px-[7px]  opacity-[0.9]"
        ></motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-5 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi, I&apos;m Mack. <br /> <br />I
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              design & develop &nbsp;
            </span>
            modern websites.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-white my-5 max-w-[600px]"
        >
          A Freelance Web Developer and Designer. I build websites, mobile apps
          and software from scratch. Explore my portfolio to discover my
          projects and expertise.
        </motion.p>
        <div className="flex w-full gap-8">
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-primary  bg-gradient-to-r from-purple-500 to-cyan-500 text-center text-white cursor-pointer rounded-lg max-w-[200px] w-full"
          >
            Get a Quote
          </motion.a>
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-secondary text-center text-white cursor-pointer rounded-lg max-w-[200px] w-full bg-[#03001417] backdrop-blur-md"
          >
            My Projects
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          className="hover:scale-105 animate-pulse"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
