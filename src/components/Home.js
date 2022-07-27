import React from 'react';
import Contact from './Contact';
import HomeDisplay from './HomeDisplay';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div className='bg-teal-100'>

            <HomeDisplay></HomeDisplay>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>

        </div>
    );
};

export default Home;