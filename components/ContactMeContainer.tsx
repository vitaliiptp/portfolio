import React from 'react';

const ContactMeContainer = () => {
    return (
        <div className='flex flex-row items-center justify-between w-4/5 my-32'>
            <p className="text-b-l lg:text-b-xl">Want to reach out?</p>
            <div className='flex w-1/3 mx-10 border-t-4 border-light-grey'>
            </div>
            <button className="text-b-s text-center uppercase border-4 px-8 py-4 hover:bg-black hover:text-b-s_w hover:border-black">
                <a href='/contact' target="_blank" rel="noopener noreferrer">Contact Me</a>
            </button>
        </div>
    );
};

export default ContactMeContainer;