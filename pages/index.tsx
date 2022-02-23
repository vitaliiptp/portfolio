import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen ">
      <div className="flex flex-col md:relative">
        <img src="/assets/home-bg.png" alt="home-background" />
        <div className="flex flex-col items-center justify-center text-center bg-white md:absolute md:bottom-0 md:left-0 md:h-1/2 md:w-1/3 md:pl-5 md:pr-10 md:justify-start md:text-left">
            <p className="text-b-xl my-20 tracking-wider leading-[4rem]">Hey, I'm Vitalii and I love creating web applications</p>
            <button className="text-b_w md:absolute md:bottom-5 md:left-5 uppercase bg-sky pl-5 py-5 hover:bg-sky-hover">
                <div className="flex flex-row">
                    <img src="/assets/icon.svg" alt="user-icon"/>
                    <span className="px-10">About Me</span>
                </div>
      </button>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
    // <div className="flex, min-h-screen py-16 text-b-xl">
    //     <div className="text-center text-8xl font-normal">VITALII POTAPENKO</div>
    //     <div className="pt-48 text-5xl text-left">My journey so far...</div>
    //   <p className="px-10 pt-20 text-3xl text-b tracking-wide leading-loose">
    //     After more than 8 years in financial analysis that included building
    //     dashboards, forecasts, and custom reports with Python scripting, I’ve
    //     noticed that building something, even writing a simple python script,
    //     was usually the most rewarding part of my job. For this reason, I’ve
    //     decided to focus full time on software engineering. I’ve successfully
    //     completed the coding Bootcamp to structure and formalize my knowledge.
    //     And now I’m looking for a web developer position.
    //   </p>
    // </div>
  );
};

export default Home;
