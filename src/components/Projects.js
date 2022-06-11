import React from 'react';
import project1 from '../images/projects-pic/Hardware-Point.png';
import project2 from '../images/projects-pic/Dental-Care.png';
import project3 from '../images/projects-pic/Warehouse-Management-Client-Side.png';
import project4 from '../images/projects-pic/TP-Link-Router.png';
import project5 from '../images/projects-pic/Tablet-Bazar.png';
import project6 from '../images/projects-pic/Panda-Commerce-Bootstrap.png';

const Projects = () => {
    return (
        <div>
            <h1 className='text-4xl  font-semibold'>Projects</h1>
            <div className='grid grid-cols-3 gap-5 py-12  px-12 '>
                <div class="hero min-h-screen border-2 border-teal-400" style={{
                    background: `url(${project1})`,
                    backgroundSize: 'cover'
                }} >
                    <div class="hero-overlay bg-opacity-10 "></div>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md">
                            <h1 class="mb-5 text-xl font-bold"></h1>


                            <button class="btn btn-sm btn-primary">Live site</button>
                            <button class="btn btn-sm btn-primary">Github client code</button>
                            <button class="btn btn-sm btn-primary">Github server code</button>

                        </div>
                    </div>
                </div>
                {/* //////////////////////////// */}
                <div class="hero min-h-screen border-2 border-teal-400" style={{
                    background: `url(${project2})`,
                    backgroundSize: 'cover'
                }} >
                    <div class="hero-overlay bg-opacity-10"></div>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md">
                            <h1 class="mb-5 text-xl font-bold"></h1>


                            <button class="btn btn-sm btn-primary">Live site</button>
                            <button class="btn btn-sm btn-primary">Github client code</button>
                            <button class="btn btn-sm btn-primary">Github server code</button>

                        </div>
                    </div>
                </div>
                {/* //////////////////////////// */}
                <div class="hero min-h-screen border-2 border-teal-400" style={{
                    background: `url(${project3})`,
                    backgroundSize: 'cover'
                }} >
                    <div class="hero-overlay bg-opacity-10 "></div>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md">
                            <h1 class="mb-5 text-xl font-bold"></h1>


                            <button class="btn btn-sm btn-primary">Live site</button>
                            <button class="btn btn-sm btn-primary">Github client code</button>
                            <button class="btn btn-sm btn-primary">Github server code</button>

                        </div>
                    </div>
                </div>
                {/* //////////////////////////// */}

            </div>
            {/* /////////////////// */}
            <div className='grid grid-cols-3 gap-5 py-12  px-12'>
                <div class="hero min-h-screen border-2 border-teal-400 " style={{
                    background: `url(${project4})`,
                    backgroundSize: 'cover'
                }} >
                    <div class=" hero-overlay bg-opacity-10"></div>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md">
                            <h1 class="mb-5 text-xl font-bold"></h1>


                            <button class="btn btn-sm btn-primary">Live site</button>
                            <button class="btn btn-sm btn-primary">Github client code</button>
                            <button class="btn btn-sm btn-primary">Github server code</button>

                        </div>
                    </div>
                </div>
                {/* //////////////////////////// */}
                <div class="hero min-h-screen border-2 border-teal-400" style={{
                    background: `url(${project5})`,
                    backgroundSize: 'cover'
                }} >
                    <div class=" hero-overlay bg-opacity-10"></div>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md">
                            <h1 class="mb-5 text-xl font-bold"></h1>


                            <button class="btn btn-sm btn-primary">Live site</button>
                            <button class="btn btn-sm btn-primary">Github client code</button>
                            <button class="btn btn-sm btn-primary">Github server code</button>

                        </div>
                    </div>
                </div>
                {/* //////////////////////////// */}
                <div class="hero min-h-screen border-2 border-teal-400" style={{
                    background: `url(${project6})`,
                    backgroundSize: 'cover'
                }} >
                    <div class="hero-overlay bg-opacity-10 "></div>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md">
                            <h1 class="mb-5 text-xl font-bold"></h1>


                            <button class="btn btn-sm btn-primary">Live site</button>
                            <button class="btn btn-sm btn-primary">Github client code</button>
                            <button class="btn btn-sm btn-primary">Github server code</button>

                        </div>
                    </div>
                </div>
                {/* //////////////////////////// */}

            </div>
        </div>
    );
};

export default Projects;