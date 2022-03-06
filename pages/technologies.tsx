import React from 'react';
import data from "../data.json";

const Technologies = () => {
    return (
        <div className="flex flex-col items-center px-8 xl:w-3/5 m-auto min-h-screen">
            <div className='rounded-lg w-full h-auto mt-24 mb-16 bg-white drop-shadow border border-light-grey'>
                <div className="flex flex-wrap items-center justify-center py-8 lg:py-16 px-4">
                    {data.technologies.map((tech, index) =>
                        <div key={tech+index} className="flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-lg drop-shadow border border-light-grey my-3 lg:my-8 mx-5 p-4 bg-white">
                            <img src={`assets/technologies/${tech}.svg`} alt='icon' width={50} height={50} />
                            <p className="pt-1 text-sb-s_black">{tech}</p>
                        </div>
                    )}
                </div>
            </div>

            <button
                className="py-2 px-4 text-b-s_grey text-center uppercase border-2 px-8 py-4 hover:bg-black hover:text-b-s_white hover:border-black rounded focus:outline-none focus:shadow-outline"
                type="submit">
                <a href="/assets/technologies/CV_Vitalii_Potapenko.pdf" target="_blank" rel="noopener noreferrer" >Download CV</a>
            </button>
        </div>
    );
};

export default Technologies;