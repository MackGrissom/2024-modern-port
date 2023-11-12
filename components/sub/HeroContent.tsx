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
      duration: 0.3,
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
      className="flex flex-col lg:flex-row items-center justify-center px-14 sm:px-6 md:px-10 lg:px-20 w-full z-20 bg-[#03001417]/60 backdrop-blur-xl h-screen"
      initial="hidden"
      animate={controls}
      variants={animationVariants}
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center text-start px-5 sm:px-10">
        <motion.div
          className="Welcome-box rounded-lg px-7 opacity-90"
          variants={staggerVariants}
        >
          {/* ... */}
        </motion.div>

        <motion.div
          className="flex flex-col gap-6 mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-[600px] w-full"
          variants={staggerVariants}
        >
          <span>
            I&apos;m Mack. <br />I develop&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white/50">
              web solutions&nbsp;
            </span>
            with cutting-edge technology{" "}
          </span>
        </motion.div>

        <motion.p
          className="text-base sm:text-lg text-white/60 my-5 max-w-[600px]"
          variants={staggerVariants}
        >
          As a freelance developer, I blend modern design with
          cutting-edge technology to bring your ideas to life. Explore my work
          and see how we can create digital magic together.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <motion.a
            className="py-2 button-primary bg-gradient-to-r from-purple-400 to-purple-600 text-center text-white cursor-pointer rounded-lg max-w-[200px] w-full"
            variants={staggerVariants}
            whileHover={hoverScaleVariants}
          >
            Receive a Quote
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

      <Image
        src="/mainIconsdark.svg"
        alt="work icons"
        height={500}
        width={500}
        className=""
      />
    </motion.div>
  );
};

export default HeroContent;
