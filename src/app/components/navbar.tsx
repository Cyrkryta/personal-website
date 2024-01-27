// React imports
import React from 'react';
import Link from 'next/link';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { CommandLineIcon } from '@heroicons/react/24/solid';
import { HomeIcon } from '@heroicons/react/24/solid';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { DocumentTextIcon } from '@heroicons/react/24/solid';

const navbar = () => {
    // Nav items
    const navItems = [
        //  className="h-6 w-6 text-black"
        {id: 1, text: "Home", ref: "/", logo: <HomeIcon />},
        {id: 2, text: "About", ref: "/about", logo: <UserCircleIcon />},
        {id: 3, text: "Resume", ref: "/resume", logo: <DocumentTextIcon />},
        {id: 4, text: "Projects", ref: "/projects", logo: <CommandLineIcon />},
        {id: 5, text: "Contact", ref: "/contact", logo: <PhoneIcon />},
    ]

    return (
        <>
            <div className='fixed bottom-5 left-1/2 -translate-x-1/2 inline-flex mx-auto justify-between bg-blue-600 w-1/3 rounded-full'>
                {/* Desktop Navigation */}
                <ul className='flex p-4 w-full justify-between'>
                    {navItems.map((item) => (
                        <li key={item.id} className='cursor-pointer'>
                            <Link href={item.ref}><div className="h-12 w-12 p-1 text-gray-300 hover:text-gray-500">{item.logo}</div></Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default navbar;