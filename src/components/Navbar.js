import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Skills</Link></li>
        <li><Link to='/'>Projects</Link></li>
        <li><Link to='/'>Testimonials</Link></li>
        <li><Link to='/'>Contact</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/aboutme'>About Me</Link></li>

    </>
    return (
        <div>
            <div className="navbar bg-teal-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-sky-900 font-semibold
">
                            {menu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-sky-800 px-11">Iqbal's Portfolio</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-sky-900 font-semibold
">
                        {menu}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;