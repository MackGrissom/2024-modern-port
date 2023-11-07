"use client";
import React, { useEffect } from "react";
import { useAnimation, motion, Variants } from "framer-motion";
import Image from "next/image";

const animationVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const staggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const hoverScaleVariants = {
  scale: 1.1,
};

const HeroContent = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.div
      className="flex flex-row items-center justify-center px-20 w-full z-[20] bg-[#03001417]/60 backdrop-blur-lg h-screen mb-40 ml-5 py-20"
      initial="hidden"
      animate={controls}
      variants={animationVariants}
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          className="Welcome-box rounded-lg py-[8px] px-[7px] opacity-[0.9]"
          variants={staggerVariants}
        ></motion.div>

        <motion.div
          className="flex flex-col gap-6 mt-5 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          variants={staggerVariants}
        >
          <span>
            Hi, I&apos;m Mack. <br /> <br />I
            <span className="text-transparent bg-clip-text bg-gradient-to-r  from-purple-400 to-purple-500">
              {" "}
              design & develop &nbsp;
            </span>
            modern solutions.
          </span>
        </motion.div>

        <motion.p
          className="text-lg text-white my-5 max-w-[600px]"
          variants={staggerVariants}
        >
          A Freelance Web Developer and Designer. I build websites, mobile apps
          and software from scratch. Explore my portfolio to discover my
          projects and expertise.
        </motion.p>
        <div className="flex w-full gap-8">
          <motion.a
            className="py-2 button-primary bg-gradient-to-r   from-purple-400 to-purple-600 text-center text-white cursor-pointer rounded-lg max-w-[200px] w-full"
            variants={staggerVariants}
            whileHover={hoverScaleVariants}
          >
            Recieve a Quote
          </motion.a>
          <motion.a
            className="py-2 button-secondary text-center text-white cursor-pointer rounded-lg max-w-[200px] w-full bg-[#03001417] backdrop-blur-md"
            variants={staggerVariants}
            whileHover={hoverScaleVariants}
          >
            View My Work
          </motion.a>
        </div>
      </div>

      <motion.div
        className="w-full h-full flex justify-center items-center"
        variants={staggerVariants}
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          className=""
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
