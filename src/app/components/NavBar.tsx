"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay'
import Image from 'next/image'

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contacts",
        path: "#contacts",
    },
    {
        title: "Blog",
        path: "https://blog.ismailmasseran.com/",
        icon: (
            <Image
                src="/icons8-new-tab.svg"
                alt="New Tab"
                width={16}
                height={16}
                className="ml-1"
            />
        ),
        target: "_blank"
    }
]

const NavBar = () => {
    const [navbarOpen, setNavbaropen] = useState(false)
    return (
        <nav className='fixed mx-auto top-0 left-0 right-0 z-10 bg-primary-950 border border-b-primary-900 border-t-transparent border-l-transparent border-r-transparent'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-3 md:px-8'>
                <Link href={"#top"} className='text-base md:text-2xl text-white font-semibold'>
                    <Image
                        src="/images/logo.svg"  // Path to your logo image
                        alt="Logo"              // Alt text for accessibility
                        width={50}              // Adjust width as needed
                        height={50}             // Adjust height as needed
                        className='md:w-50 md:h-50' // Optional: adjust size on larger screens
                    />
                </Link>
                <div className='mobile-menu block md:hidden'>
                    {
                        !navbarOpen ? (
                            <button onClick={() => setNavbaropen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <Bars3Icon className='h-5 w-5' />
                            </button>
                        ) : (
                            <button onClick={() => setNavbaropen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <XMarkIcon className='h-5 w-5' />
                            </button>
                        )
                    }
                </div>
                <div className='menu hidden md:block md:w-auto' id="navbar">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} icon={link.icon} target={link.target} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

export default NavBar