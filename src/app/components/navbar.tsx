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
            <div className='hidden fixed bottom-5 left-1/2 -translate-x-1/2 lg:inline-flex mx-auto justify-between w-1/3 rounded-3xl bg-slate-200'>
                <ul className='flex p-4 w-full justify-between'>
                    {navItems.map((item) => (
                        <li key={item.id} className='cursor-pointer'>
                            <Link href={item.ref}><div className="h-10 w-10 text-gray-400 hover:text-gray-600">{item.logo}</div></Link>
                        </li>)
                    )}
                </ul>
            </div>

            {/* Mobile/Tablet Navigation */}
            {/* Menu open close click event */}
            <div onClick={handleNav} className='block fixed bottom-5 left-5 lg:hidden'>
                {nav ? <XMarkIcon className='h-10 w-10 text-gray-400 hover:text-gray-600 cursor-pointer' /> : <Bars4Icon className='h-10 w-10 p-1 text-gray-400 hover:text-gray-600 cursor-pointer'/>}
            </div>
            {/* Open menu */}
            <ul
            className={nav
                ? 'block fixed left-5 bottom-16 lg:hidden h-1/3 rounded-3xl bg-slate-200 ease-in-out duration-500'
                : 'ease-in-out duration-500 fixed hidden origin-bottom-left'}>
                    <li>Hej med dig</li>
            </ul>
        </>
    );
};

export default Navbar;