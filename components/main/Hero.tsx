import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col  w-full bg-[#03001417] backdrop-blur-lg  h-screen"
      id="about-me"
    >
      <video
        autoPlay
        muted
        loop
        className=" absolute   h-full w-full left-0 z-[1] object-cover opacity-70"
      >
        <source src="/texture.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
