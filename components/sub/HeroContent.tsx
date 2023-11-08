"use client";
import React, { useEffect } from "react";
import { useAnimation, motion, Variants } from "framer-motion";
import Image from "next/image";
import FloatingShape from "../three/FloatingShape";
import Shape from "../three/FloatingShape";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

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
      className="flex flex-row items-center justify-center px-20 w-[100vw] z-[20] bg-[#03001417]/60 backdrop-blur-xl h-[100vh] ml-5"
      initial="hidden"
      animate={controls}
      variants={animationVariants}
    >
      <div className="h-[100vh] w-full flex flex-col gap-5 justify-center m text-start">
        <motion.div
          className="Welcome-box rounded-lg  px-[7px] opacity-[0.9]"
          variants={staggerVariants}
        ></motion.div>

        <motion.div
          className="flex flex-col gap-6 mt-5 text-5xl font-bold text-white max-w-[600px] w-screen h-[screen]"
          variants={staggerVariants}
        >
          <span>
            Hi, I&apos;m Mack. <br />I build
            <span className="text-transparent bg-clip-text bg-gradient-to-r  from-purple-400 to-white/50">
              {" "}
              modern solutions
            </span>
            &nbsp;on the web
          </span>
        </motion.div>

        <motion.p
          className="text-lg text-white my-5 max-w-[600px]"
          variants={staggerVariants}
        >
          I build modern websites, web apps, mobile apps and software from
          scratch. My products are faster, lighter and SEO optimized. Explore my
          portfolio to discover my expertise.
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
        {/* <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          className=""
        /> */}

        {/* react three fiber */}
        {/* <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Physics>
          <FloatingShape />
        </Physics>
      </Canvas> */}
    {/* end react three fiber */}
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
