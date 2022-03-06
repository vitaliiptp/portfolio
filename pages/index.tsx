import React from "react";
import Image from "next/image";
import Link from "next/link";


const Home = () => {
  return (
    <div className="min-h-screen w-auto mt-4 mx-5 lg:w-4/5 lg:m-auto md:mt-4 lg:mt-4">
      <div className="flex flex-col  md:relative ">
        <img src="/assets/home/home-bg.png" alt="home-background" />
        <div className="flex flex-col items-center justify-center text-center bg-main md:absolute md:bottom-0 md:left-0 md:h-1/2 md:w-1/3 md:pr-10 md:justify-start md:text-left">
          <p className="text-b-l_grey leading-[3rem] tracking-wider my-10 md:text-vw_grey md:leading-normal md:tracking-normal md:my-0 xl:my-5 2xl:my-10">
            {`Hey, I'm Vitalii and I love creating web applications`}
          </p>
          <Link href='#about-me'>
            <button className="text-b-m_white md:text-b-s_white md:py-3 lg:py-5 lg:text-b-m_white md:absolute md:bottom-0 md:left-0 md:text-b-m_white lg:text-b_w uppercase bg-sky pl-5 py-5 hover:bg-sky-hover">
              <div className="flex flex-row">
                <Image
                    src="/assets/home/chevron.png"
                    alt="user-icon"
                    width="26"
                    height="0"
                />
                <span className="px-10 md:px-5 lg:px-10">About Me</span>
              </div>
            </button>
          </Link>

        </div>
      </div>
      <div className="flex flex-col items-center mt-20 md:flex-row md:items-start md:mt-40">
        <div className="flex md:w-2/5 h-auto">
          <img className="md:h-[40rem] md:object-cover" src="/assets/home/ava.jpeg" alt="avatar" />
        </div>
        <div id='about-me' className="mt-16 md:ml-20 lg:ml-30 xl:ml-40 md:w-3/5 md:mt-0 border-y-4 border-light-grey">
          <div className="text-left">
            <p className="my-12 text-b-l_grey lg:text-b-xl_grey">About Me</p>
            <p className="text-n-m_grey tracking-wide leading-relaxed 2xl:text-n-l_grey 2xl:leading-loose">
              After more than 8 years in financial analysis that included
              building dashboards, forecasts, and custom reports with Python
              scripting, I’ve noticed that building something, even writing a
              simple python script, was usually the most rewarding part of my
              job. For this reason, I’ve decided to focus full time on software
              engineering. I’ve successfully completed the coding Bootcamp to
              structure and formalize my knowledge. And now I’m looking for a
              web developer position.
            </p>
            <Link href='/portfolio'>
              <button className="my-10 text-b-s_grey text-center uppercase border-2 px-8 py-4 hover:bg-black hover:text-b-s_white hover:border-black">
                Go to portfolio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
