import React from 'react';
import manStandingWithTable from '../images/man-standing-with-graph-table-blue3.png';
import html5 from '../images/html5.png';
import css3 from '../images/css3.png';
import tailwind from '../images/tailwind.png';
import javascript from '../images/javascript.png';
import nodejs from '../images/nodejs.png';
import mongodb from '../images/mongodb.png';


const Skills = () => {
    return (
        <div>
            <h2 className='text-5xl font-bold'>What I Do ?</h2>
            <div>
                <div class="hero min-h-screen bg-teal-100">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src={manStandingWithTable} class="w-6/12 mr-24  rounded-lg " />
                        <div>
                            <h1 class="text-3xl font-semibold text-left pb-12">Full Stack Development!</h1>
                            <div className='flex  w-24'>
                                <img src={html5} alt="" className='w-24 h-24' />
                                <img src={css3} alt="" className='w-24 h-24' />
                                <img src={tailwind} alt="" className='w-24  h-24' />
                                <img src={javascript} alt="" className='w-24  h-24' />
                                <img src={nodejs} alt="" className='w-24  h-24' />
                                <img src={mongodb} alt="" className='w-24  h-24' />
                            </div>
                            <div>
                                <p className='text-left text-xl'>Building responsive website Front End using React-Tailwind .</p>
                                <p className='text-left text-xl'>Developing mobile applications using  React Native .</p>
                                <p className='text-left text-xl'>Creating application backend in Node, Express and MongoDB .</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;