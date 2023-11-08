import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div
      className=" flex flex-col  w-[100vw] bg-[#03001417] backdrop-blur-sm  h-[screen] bottom-0 fixed"
      id="about-me"
    >
      <video
        autoPlay
        muted
        loop
        className=" absolute   h-[screen] w-[100vw] left-0 z-[1] object-cover opacity-70 bottom-0"
      >
        <source src="/texture.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
