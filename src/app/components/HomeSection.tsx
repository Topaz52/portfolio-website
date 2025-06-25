"use client"
import React from 'react'
import Image from 'next/image'
import FacebookIcon from '/public/icons8-facebook.svg'
import LinkedInIcon from '/public/icons8-linkedin.svg'
import GithubIcon from '/public/icons8-github.svg'
import ProfilePic from '/public/images/profile-pic.png'
import MailIcon from '/public/icons8-mail.png'
import Link from 'next/link'
import { motion } from "framer-motion"
import { useState } from 'react';

const HomeSection = () => {
    const [loading, setLoading] = useState(false);

    const handleDownload = () => {
        setLoading(true);

        // Simulate download delay (for example, 2 seconds)
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = 'https://save2s3.s3.amazonaws.com/ISMAIL_Resume.pdf'; // Public S3 URL
            link.target = '_blank'; // Open in new tab
            link.rel = 'noopener noreferrer'; // Security best practice for new tabs
            link.click();
            setLoading(false);
        }, 2000);
    };
    return (
        <section>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center mt-3">
                <div className='place-self-center'>
                    <div className="relative rounded-full bg-primary-500 w-[180px] h-[180px] flex items-center justify-center">
                        <Image
                            src={ProfilePic}
                            alt='Profile Pic'
                            className='rounded-full'
                            width={180}
                            height={180}
                        />
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-8 text-center">
                    <h1 className='text-white mb-4 text-2xl font-extrabold lg:text-6xl'>
                        ISMAIL MASSERAN
                    </h1>
                    <h3 className='text-sm lg:text-sm mb-5 text-gray-400'>
                        {/* <a href="mailto:ismailmasseran1@gmail.com" className="hover:underline">
                            ismailmasseran1@gmail.com
                        </a> */}
                    </h3>
                    <div className='socials flex flex-row lg:flex-col lg:top-1/4 lg:left-8 lg:absolute gap-5 justify-center mb-5'>
                        <Link href="https://github.com/Topaz52" target="_blank">
                            <Image src={GithubIcon} alt="Github Icon" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/ismailmasseran/" target="_blank">
                            <Image src={LinkedInIcon} alt="Linkedin Icon" />
                        </Link>
                        <Link href="https://www.facebook.com/ismailmasseran3/" target="_blank">
                            <Image src={FacebookIcon} alt="Facebook Icon" />
                        </Link>
                        <Link href="mailto:ismailmasseran1@gmail.com">
                            <Image src={MailIcon} alt="Mail Icon" />
                        </Link>
                    </div>
                    <p className='text-md lg:text-xl font-extralight lg:max-w-xl mb-3'>
                        Aspiring Data Scientist with a strong academic foundation and a passion for uncovering insights from data.
                    </p>
                </div>
                <button
                    type='button'
                    onClick={handleDownload}
                    disabled={loading}
                    className={`bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 rounded-lg text-white font-bold py-2.5 px-5 ${loading ? 'cursor-wait opacity-70' : ''
                        }`}
                >
                    {loading ? 'Downloading...' : 'RESUME'}
                </button>
            </motion.div>
        </section>
    )
}

export default HomeSection