import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight  m-5">
        I'm a full-stack developer with 5 years of experience using React and
        NodeJS. Reach out if you'd like to learn more!
        </p>
        <a  href="mailto:sunnykumar701170@gmail.com" className="m-6 md:md-10 text-white py02  px-3 text-sm md:text-lg md:py-3 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </a>
      </div>
      <div>
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home; 
