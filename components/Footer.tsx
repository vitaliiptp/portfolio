import React from 'react';


const Footer = () => {
    return (
        <div className="w-full bg-grey py-5">
            <footer className="flex items-center justify-center">
                <div className="flex justify-center">
                    <a href="https://github.com/vitaliiptp" target="_blank" rel="noopener noreferrer" >
                        <img src="/assets/footer/github.svg" alt="github logo" className="w-11 h-auto mx-3 rounded-lg" />
                    </a>
                    <a href="https://www.linkedin.com/in/vitalii-potapenko/" target="_blank" rel="noopener noreferrer" >
                    <img src="/assets/footer/linkedin.svg" alt="linkedin logo" className="w-11 h-auto mx-3 rounded-lg" />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
