import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import aboutImg from '../images/about-me.png'

const AboutMe = () => {
    return (
        <div className='bg-teal-100 flex justify-center'>
            <div className='w-96  ' >
                <img className='' src={aboutImg} alt="" />
                <p>
                    Myself , <strong> Md Iqbal Hasan Rumon</strong> , graduated from PCIU in CSE.
                    I want to ba a good web developer .I want to strong my skills with PH.
                    I am dedicated to my goal.I  enjoy to learning new things about anythings.
                </p>
                <p>Email:  iamhasan9501@gmail.com </p>
                <p>Github: https://github.com/ImIqbal27 </p>
                <p>Linkedin: https://www.linkedin.com/in/myselfiqbal/</p>
                <p>Call: +880 1834093013</p>
                <p>Website: <a href={'https://iqbal-hasan-portfolio.web.app/'} >https://iqbal-hasan-portfolio.web.app </a></p>

                {/* <button class="btn btn-outline    ">
                    <a href={'https://www.facebook.com/iamiqbal27/'} > Contact With Me</a>
                </button> */}
            </div>
        </div>
    );
};

export default AboutMe;