import React from 'react';
import displayPic from '../images/man-siting-with-pc-blue-color.svg';

const HomeDisplay = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-teal-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={displayPic} className="w-5/12 ml-24 rounded-lg " />
                    <div>
                        <h1 className="text-5xl font-semibold text-left text-sky-900">Md Iqbal Hasan Rumon</h1>
                        <p className="py-2 text-left text-sky-800">MERN STACK Web Developer</p>
                        <p className="text-left ">A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>

                        <button className="btn btn-outline   flex justify-start ">
                            <a href={'https://drive.google.com/file/d/1ykjl7BKsgmKj6jw4Y8BVulB3p457s3Bx/view'} > Download Resume</a>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDisplay;