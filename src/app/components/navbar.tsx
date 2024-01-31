// Use client
"use client"

// React imports
import React, { useState } from 'react';
import Link from 'next/link';

import { PhoneIcon } from '@heroicons/react/24/solid';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import { HomeIcon } from '@heroicons/react/24/solid';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { DocumentTextIcon } from '@heroicons/react/24/solid';
import { Bars4Icon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    // Navbar management and handling
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }

    // Nav items
    const navItems = [
        //  className="h-6 w-6 text-black"
        {id: 1, text: "Home", ref: "/", logo: <HomeIcon />},
        {id: 2, text: "About", ref: "/about", logo: <UserCircleIcon />},
        {id: 3, text: "Resume", ref: "/resume", logo: <DocumentTextIcon />},
        {id: 4, text: "Projects", ref: "/projects", logo: <CodeBracketIcon />},
        {id: 5, text: "Contact", ref: "/contact", logo: <PhoneIcon />},
    ]

    return (
        <>
            {/* Desktop Navigation */}
            <div className='hidden fixed bottom-10 left-1/2 -translate-x-1/2 md:inline-flex mx-auto justify-between w-96 rounded-2xl'>
                <ul className='flex p-2 w-full justify-between'>
                    {navItems.map((item) => (
                        <li key={item.id} className='cursor-pointer'>
                            <Link href={item.ref} className='active:h-8 active:w-8 hover:motion-safe:animate-pulse active:text-gray-600'><div className="h-10 w-10 active:h-8 active:w-8 text-slate-200 hover:text-gray-600 opacity-100">{item.logo}</div></Link>
                        </li>)
                    )}
                </ul>
            </div>

            {/* Mobile/Tablet Navigation */}
            {/* Menu open close click event */}
            <div onClick={handleNav} className='block fixed bottom-5 left-6 lg:hidden'>
                {nav ? <XMarkIcon className='h-10 w-10 text-gray-400 hover:text-gray-600 cursor-pointer' /> : <Bars4Icon className='h-10 w-10 p-1 text-gray-500 hover:text-gray-600 cursor-pointer'/>}
            </div>
            {/* Open menu */}
            <ul
            className={nav
                ? 'flex flex-col fixed mx-auto justify-between items-center left-5 bottom-16 md:hidden h-60 w-12 rounded-2xl p-2'
                : 'fixed hidden origin-bottom-left transition ease-in-out duration-500'}>
                {navItems.map((item) => (
                    <li key={item.id} className='cursor-pointer'>
                        <Link href={item.ref} className='active:h-8 active:w-8 hover:motion-safe:animate-pulse active:text-gray-600'><div className='h-10 w-10 active:h-8 active:w-8 text-slate hover:text-gray-600 text-slate-200'> {item.logo} </div></Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Navbar;