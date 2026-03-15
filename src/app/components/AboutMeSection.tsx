"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AboutMeSection = () => {
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

    return (
        <section id='about' className='text-white py-3 lg:py-0'>
            <motion.div animate={controls} ref={sectionRef}>
                <div className='flex flex-col items-center text-center py-6 lg:py-0 px-4'>
                    <h2 className='text-2xl font-bold text-white mb-4 md:text-4xl'>
                        ABOUT ME
                    </h2>
                    <p className='text-md font-thin text-slate-200 max-w-xl text-justify'>
                        I'm Ismail, a Full Stack Developer with experience in designing and developing web-based application systems. I specialize in building scalable and maintainable applications using modern technologies such as Vue.js, Laravel, Docker, and PostgreSQL.

                        I began my journey with a strong interest in data and programming, which helped me develop analytical thinking and problem-solving skills. Over time, my focus evolved into full-stack web development, where I enjoy turning complex requirements into practical and reliable systems.

                        Currently, I work at MAXVEC as a Full Stack Developer, contributing to the development and maintenance of enterprise web applications. My work involves building backend services with Laravel, developing interactive front-end interfaces with Vue.js, and managing containerized environments using Docker.

                        In my free time, I enjoy solving algorithmic challenges on LeetCode, which helps me sharpen my logical thinking and approach problems from multiple perspectives.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutMeSection;