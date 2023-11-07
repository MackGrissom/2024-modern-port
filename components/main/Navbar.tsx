'use client'
import React from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import {
  UserCircle,
  Code,
  Briefcase,
  Mail,
  HomeIcon,
  Paintbrush,
  CameraIcon,
} from "lucide-react"; // Import Lucide Icons
import { motion } from "framer-motion"; // Import motion from framer-motion

const Navbar = () => {
  return (
    <motion.div
    className="w-16 h-screen fixed left-0 top-0 shadow-md shadow-[white]/50 bg-[#03001417] backdrop-blur-md z-50 px-2 md:px-4 py-5"
    initial={{ x: -100, opacity: 0 }} // Initial animation values
    animate={{ x: 0, opacity: 1 }} // Animation values when component mounts
    exit={{ x: -100, opacity: 0 }} // Animation values when component unmounts
  >
    <div className="w-16 h-screen fixed left-0 top-0 shadow-md shadow-[white]/50 bg-[#03001417] backdrop-blur-md z-50 px-2 md:px-4 py-5">
      <div className="flex flex-col  justify-between h-full">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center transition-transform transform hover:scale-110"
        >
          <Image
            src="/navlogo.svg"
            alt="logo"
            width={80}
            height={80}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold mt-2 hidden md:block text-gray-300 text-xs"></span>
        </a>

        <div className="flex flex-col items-center space-y-4 text-white mt-5">
  <a
    href="#about-me"
    className="cursor-pointer flex flex-col items-center hover:backdrop-blur-md transition-bg rounded-md duration-200 transform hover:scale-110 gap-2 pb-4 relative group"
  >
    <HomeIcon
      size={18}
      color="white"
      className="mb-1 md:mb-2 opacity-100 transition-opacity group-hover:opacity-0"
    />
    <span
      className="title-text text-xs transform rotate-0 text-center whitespace-nowrap absolute opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-hover:visible group-hover:rotate-0"
    >
      Home
    </span>
  </a>
  <hr className="border-gray-400 my-2 w-6 md:w-10 h-0.5" />
  <a
    href="#projects"
    className="cursor-pointer flex flex-col items-center hover:backdrop-blur-md transition-bg rounded-md duration-200 transform hover:scale-110 gap-4 pb-4 relative group"
  >
    <Paintbrush
      size={18}
      color="white"
      className="mb-1 md:mb-2 opacity-100 transition-opacity group-hover:opacity-0"
    />
    <span
      className="title-text text-xs transform rotate-0 text-center whitespace-nowrap absolute opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-hover:visible group-hover:rotate-0"
    >
      Projects
    </span>
  </a>
  <hr className="border-gray-400 my-2 w-6 md:w-10 h-0.5" />
  <a
    href="#contact"
    className="cursor-pointer flex flex-col items-center hover:backdrop-blur-md transition-bg rounded-md duration-200 transform hover:scale-110 gap-3 pb-4 relative group"
  >
    <Mail
      size={18}
      color="white"
      className="mb-1 md:mb-2 opacity-100 transition-opacity group-hover:opacity-0"
    />
    <span
      className="title-text text-xs transform rotate-0 text-center whitespace-nowrap absolute opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-hover:visible group-hover:rotate-0"
    >
      Contact
    </span>
  </a>
  <hr className="border-gray-400 my-2 w-6 md:w-10 h-0.5" />
  <a
    href="#photography"
    className="cursor-pointer flex flex-col items-center hover:backdrop-blur-md transition-bg rounded-md duration-200 transform hover:scale-110 gap-2 pb-4 relative group"
  >
    <CameraIcon
      size={18}
      color="white"
      className="mb-1 md:mb-2 opacity-100 transition-opacity group-hover:opacity-0"
    />
    <span
      className="title-text text-xs transform rotate-0 text-center whitespace-nowrap absolute opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-hover:visible group-hover:rotate-0"
    >
      Photos
    </span>
  </a>
</div>



        <div className="flex flex-col gap-3 md:gap-5 mt-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              className="transition-transform transform hover:scale-110"
            />
          ))}
        </div>
      </div>
    </div>
    </motion.div>

  );
};

export default Navbar;
