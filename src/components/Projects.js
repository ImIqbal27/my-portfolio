import React from 'react';
import project1 from '../images/projects-pic/Hardware-Point.png';
import project2 from '../images/projects-pic/Dental-Care.png';
import project3 from '../images/projects-pic/Warehouse-Management-Client-Side.png';
import project4 from '../images/projects-pic/TP-Link-Router.png';
import project5 from '../images/projects-pic/Tablet-Bazar.png';
import project6 from '../images/projects-pic/Panda-Commerce-Bootstrap.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    return (
        <div className='bg-teal-100'>
            <h1 className='text-4xl  font-semibold'>Projects</h1>
            {/* /////////////////////////////////////s */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12  px-12 '>
                <div className="hero min-h-screen border-2 border-teal-400" style={{
                    background: `url(${project1})`,
                    backgroundSize: 'cover'
                }} >
                    <div className="hero-overlay bg-opacity-10 "></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl text-black ">Hardware Point</h1>
                            <button className="btn btn-xs btn-accent m-1"> <a href={'https://manufacturer-website-cli-b14a0.web.app/'}><FontAwesomeIcon icon={faLink}></FontAwesomeIcon> Live site</a></button>
                            <button className="btn btn-xs btn-accent m-1"><a href={'https://github.com/ImIqbal27/manufacturer-website-client'}> Github client code</a></button>
                            <button className="btn btn-xs btn-accent m-1"><a href={'https://github.com/ImIqbal27/manufacturer-website-server'}>Github server code</a></button>

                        </div>
                    </div>
                </div>
                {/* //////////////////////////// */}
                <div className="hero min-h-screen border-2 border-teal-400" style={{
                    background: `url(${project2})`,
                    backgroundSize: 'cover'
                }} >
                    <div className="hero-overlay bg-opacity-10"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl text-black">Dental Care</h1>
                            <button className="btn btn-xs btn-accent m-1" ><a href={'https://dental-care-app.netlify.app/'}><FontAwesomeIcon icon={faLink}></FontAwesomeIcon>Live site</a></button>
                            <button className="btn btn-xs btn-accent m-1"><a href={'https://github.com/ImIqbal27/Dental-Care-App'}>Github client code</a></button>
                            <button className="btn btn-xs btn-accent m-1"><a href={''}>Github server code</a></button>

                        </div>
                    </div>
                </div>
                {/* //////////////////////////// */}
                <div className="hero min-h-screen border-2 border-teal-400" style={{
                    background: `url(${project3})`,
                    backgroundSize: 'cover'
                }} >
                    <div className="hero-overlay bg-opacity-10 "></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl text-black">Warehouse</h1>
                            <button className="btn btn-xs btn-accent m-1" ><a href={'https://warehouse-management-cli-a04c2.web.app/'}><FontAwesomeIcon icon={faLink}></FontAwesomeIcon>Live site</a></button>
                            <button className="btn btn-xs btn-accent m-1"><a href={'https://github.com/ImIqbal27/warehouse-management-system'}>Github client code</a></button>
                            <button className="btn btn-xs btn-accent m-1"><a href={'https://github.com/ImIqbal27/warehouse-management-system-server'}>Github server code</a></button>
                        </div>
                    </div>
                </div>
                {/* //////////////////////////// */}

            </div>
            {/* /////////////////// */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12  px-12'>
                <div className="hero min-h-screen border-2 border-teal-400 " style={{
                    background: `url(${project4})`,
                    backgroundSize: 'cover'
                }} >
                    <div className=" hero-overlay bg-opacity-10"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl text-black">TP-Link Router</h1>
                            <button className="btn btn-xs btn-accent m-1" ><a href={'https://product-analysis-rumon.netlify.app/'}><FontAwesomeIcon icon={faLink}></FontAwesomeIcon>Live site</a></button>
                            <button className="btn btn-xs btn-accent m-1"><a href={'https://github.com/ImIqbal27/product-analysis-review-TP-Link'}>Github client code</a></button>

                        </div>
                    </div>
                </div>
                {/* //////////////////////////// */}
                <div className="hero min-h-screen border-2 border-teal-400" style={{
                    background: `url(${project5})`,
                    backgroundSize: 'cover'
                }} >
                    <div className=" hero-overlay bg-opacity-10"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl text-black">Tablet Bazar</h1>
                            <button className="btn btn-xs btn-accent m-1" ><a href={'https://tablet-bazar-rumon.netlify.app/'}><FontAwesomeIcon icon={faLink}></FontAwesomeIcon>Live site</a></button>
                            <button className="btn btn-xs btn-accent m-1"><a href={'https://github.com/ImIqbal27/Tablet-Bazar-App'}>Github client code</a></button>

                        </div>
                    </div>
                </div>
                {/* //////////////////////////// */}
                <div className="hero min-h-screen border-2 border-teal-400" style={{
                    background: `url(${project6})`,
                    backgroundSize: 'cover'
                }} >
                    <div className="hero-overlay bg-opacity-10 "></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl text-black">Panda Ecommers</h1>
                            <button className="btn btn-xs btn-accent m-1" ><a href={'https://imiqbal27.github.io/panda-commerce-bootstrap/'}><FontAwesomeIcon icon={faLink}></FontAwesomeIcon>Live site</a></button>
                            <button className="btn btn-xs btn-accent m-1"><a href={'https://github.com/ImIqbal27/panda-commerce-bootstrap'}>Github client code</a></button>

                        </div>
                    </div>
                </div>
                {/* //////////////////////////// */}

            </div>
        </div>
    );
};

export default Projects;