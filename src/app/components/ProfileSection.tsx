"use client"
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import ProfilePic from '/public/images/profile-pic.png'
import Link from 'next/link'
import { motion, useAnimation } from "framer-motion";

const HomeSection = () => {
    const [loading, setLoading] = useState(false);
    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        controls.start({
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 50,
            transition: { duration: 0.5 },
        });
    }, [inView, controls]);

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
        <section className="lg:sticky lg:top-24">
            <motion.div
                animate={controls}
                ref={sectionRef}
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
                    <div className='socials flex flex-row gap-5 justify-center mt-4'>
                        <Link href="https://github.com/Topaz52" target="_blank">
                            <FaGithub className='w-8 h-8 text-white' />
                        </Link>
                        <Link href="https://www.linkedin.com/in/ismailmasseran/" target="_blank">
                            <FaLinkedin className='w-8 h-8 text-white' />
                        </Link>
                        <Link href="https://web.facebook.com/ismailmasseran3/" target="_blank">
                            <FaFacebook className='w-8 h-8 text-white' />
                        </Link>
                        <Link href="mailto:ismailmasseran1@gmail.com">
                            <FaEnvelope className='w-8 h-8 text-white' />
                        </Link>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-8 text-center">
                    <h1 className='text-white mb-4 text-2xl font-extrabold lg:text-6xl'>
                        ISMAIL MASSERAN
                    </h1>
                    <p className='text-md lg:text-xl font-extralight lg:max-w-xl mb-3'>
                        Full Stack Developer specializing in building modern and scalable web-based applications.                    </p>
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