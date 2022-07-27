import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import displayPic from '../images/man-siting-with-pc-blue-color.svg';
import './HomeDisplay.css' ;

const HomeDisplay = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-teal-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={displayPic} className="w-5/12 ml-24 rounded-lg display-pic-table" alt='img' />
                    <div>
                        <h1 className="text-5xl font-semibold text-left text-sky-900">Md Iqbal Hasan Rumon</h1>
                        <p className="py-2 text-left text-sky-800">MERN STACK Web Developer</p>
                        <p className="text-left ">A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>
                        <br />

                        <button className="btn btn-accent  text-black border-2 border-teal-900 flex justify-start ">
                            <FontAwesomeIcon icon={faDownload} className='pr-2'></FontAwesomeIcon>
                            <a href={'https://drive.google.com/file/d/1V5EJZzFLC32LO7rz0QmIR3B7oCmKb1aw/view?usp=sharing'} > Download Resume</a>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDisplay;