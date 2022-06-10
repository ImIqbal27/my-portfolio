import React from 'react';
import Footer from './Footer';
import HomeDisplay from './HomeDisplay';
import Navbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div className='bg-teal-100'>
            <Navbar></Navbar>
            <HomeDisplay></HomeDisplay>
            <Skills></Skills>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;