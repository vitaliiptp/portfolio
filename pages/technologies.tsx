import React from 'react';

const Technologies = () => {
    return (
        <div id="tech-stack" className="flex, min-h-screen py-16 text-b-xl">
            <div className="text-5xl text-left">
                Technologies I enjoy working with
            </div>
            <div className="px-10 pt-20">
                <p>HTML/CSS</p>
                <p>JavaScript (React, NextJS, Storybook, NodeJS + Express)</p>
                <p>Python (Flask, Jupiter Notebooks)</p>
                <p>SQL (MySQL)</p>
                <p>REST APIs</p>
                <p>Git, Unix</p>
                <p>VS Code, WebStorm, PyCharm</p>
            </div>
            <div className="px-10 pt-20"><a href="/assets/CV_Vitalii_Potapenko.pdf" download>Download CV</a></div>
        </div>
    );
};

export default Technologies;