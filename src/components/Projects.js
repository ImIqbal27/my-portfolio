import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import './Projects.css';

const Projects = () => {
    return (
        <div className='bg-teal-100'>
            <h1 className='text-4xl  font-semibold'>Projects</h1>
            {/* /////////////////////////////////////s */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12  px-12 '>
                <div className="hero min-h-screen border-2 border-teal-400 pro-tran" style={{
                    background: `url(https://i.ibb.co/31TLLZF/Hardware-Point.png)`,
                    backgroundSize: 'cover'
                }} >
                    <div className="hero-overlay bg-opacity-10 "></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl text-black ">Hardware Point App</h1>
                            <button className="btn btn-xs btn-accent m-1"> <a href={'https://manufacturer-website-cli-b14a0.web.app/'}><FontAwesomeIcon icon={faLink}></FontAwesomeIcon> Live site</a></button>
                            <button className="btn btn-xs btn-accent m-1"><a href={'https://github.com/ImIqbal27/manufacturer-website-client'}> Github client code</a></button>
                            <button className="btn btn-xs btn-accent m-1"><a href={'https://github.com/ImIqbal27/manufacturer-website-server'}>Github server code</a></button>

                        </div>
                    </div>
                </div>
                {/* //////////////////////////// */}
                <div className="hero min-h-screen border-2 border-teal-400  pro-tran" style={{
                    background: `url(https://i.ibb.co/9GpCbyn/Dental-Care.png)`,
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
                <div className="hero min-h-screen border-2 border-teal-400  pro-tran" style={{
                    background: `url(https://i.ibb.co/qMdgKfg/Warehouse-Management-Client-Side.png)`,
                    backgroundSize: 'cover'
                }} >
                    <div className="hero-overlay bg-opacity-10 "></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl text-black">Warehouse App</h1>
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
                <div className="hero min-h-screen border-2 border-teal-400  pro-tran" style={{
                    background: `url(https://i.ibb.co/ngr9z5s/TP-Link-Router.png)`,
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
                <div className="hero min-h-screen border-2 border-teal-400  pro-tran" style={{
                    background: `url(https://i.ibb.co/VxhYfcW/Tablet-Bazar.png)`,
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
                <div className="hero min-h-screen border-2 border-teal-400  pro-tran" style={{
                    background: `url(https://i.ibb.co/XVw81cR/Food-Valley.png)`,
                    backgroundSize: 'cover'
                }} >
                    <div className="hero-overlay bg-opacity-10 "></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl text-black">Food Valley App</h1>
                            <button className="btn btn-xs btn-accent m-1" ><a href={'https://project-with-redux-react.netlify.app/'}><FontAwesomeIcon icon={faLink}></FontAwesomeIcon>Live site</a></button>
                            <button className="btn btn-xs btn-accent m-1"><a href={'https://github.com/ImIqbal27/Food-Valley-with-redux'}>Github client code</a></button>

                        </div>
                    </div>
                </div>
                {/* //////////////////////////// */}

            </div>
        </div>
    );
};

export default Projects;