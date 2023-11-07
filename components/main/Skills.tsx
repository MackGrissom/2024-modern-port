import React from "react";
import { Skill_data } from "@/constants";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section id="skills" className="mb-[100px] h-screen pt-[100px] ">
      <div className="flex items-center flex-wrap flex-col">
        <video
          autoPlay
          muted
          loop
          className=" absolute   h-full w-full left-0 z-[0] object-cover opacity-70"
        >
          <source src="/encryption.webm" type="video/webm" />
        </video>
        <SkillText />
        <div className="grid  grid-cols-5 gap-4  bg-[#03001417] backdrop-blur-md w-[50%] mb-20 pt-20">
          {Skill_data.map((image, index) => (
            <div
              key={index}
              className="group relative cursor-pointer transform transition-transform hover:scale-105"
            >
              <SkillDataProvider
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
              <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity">
                <p className="text-white text-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.skill_name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
