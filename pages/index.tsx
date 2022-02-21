import React from "react";

const Home = () => {
  return (
      <div>
          <div className="flex, min-h-screen">
              <div className="relative">
                  <div>
                      <img src='/assets/home-bgnd.png' alt="home-background" />
                  </div>
                  <div className="absolute bottom-0 left-0 h-48 w-auto bg-yellow">Hey, I'm Vitalii Potapenko and I love creating web applications</div>
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
