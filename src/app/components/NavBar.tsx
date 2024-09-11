"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay'

const navLinks = [
    {
        title: "ABOUT",
        path: "#about",
    },
    {
        title: "PROJECTS",
        path: "#projects",
    },
    {
        title: "CONTACTS",
        path: "#contacts",
    },
]

const NavBar = () => {
    const [navbarOpen, setNavbaropen] = useState(false)
    return (
        <nav className='fixed mx-auto top-0 left-0 right-0 z-10 bg-primary-950 border border-b-primary-900 border-t-transparent border-l-transparent border-r-transparent'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-5 py-3'>
                <Link href={"#top"} className='text-base md:text-2xl text-white font-semibold'>HOME</Link>
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
                                    <NavLink href={link.path} title={link.title} />
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