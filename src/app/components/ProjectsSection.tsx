"use client"

import React, { useRef, useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import { motion, useAnimation } from 'framer-motion';

const projectsData = [
    {
        id: 1,
        title: "SUTERA 3.0",
        description: "SUTERA 3.0 (Sistem Untuk Rejimen Askar Jurutera Diraja, Kenderaan Jenis C) is a web-based system designed for the Royal Engineers Regiment to manage detailed information and repair statuses (Repair, Usable, Unusable, Good Under Observation) of their Earthmoving, Support, and Construction machinery, featuring an interactive dashboard and automated monthly reports.",
        urlLink: "",
        githubLink: "",
        techStack: "PHP 8, Laravel 11, JavaScript, TailwindCSS, Composer, Blade, Docker, MySQL 8"
    },
    {
        id: 1,
        title: "EMESYS 4.0",
        description: "EMESYS (Sistem Senggaraan Kejuruteraan Tentera Darat) is a specialized engineering maintenance system for the Malaysian Army, focusing on Kenderaan Jenis A (KJA), Kenderaan Jenis B (KJB), and a diverse range of Various Tools and Weapons. This system streamlines the repair process for all these assets, making it easy for users to update their status as Boleh Guna (BG - Usable) or Tidak Boleh Guna (TBG - Unusable). EMESYS also features advanced generated reports and a complex Role-Based Access Control (RBAC) system to ensure data security and operational efficiency.",
        urlLink: "https://emesys.army.mil.my/#/login",
        githubLink: "",
        techStack: "PHP 8, Laravel 11, Vue.js, Typescript, TailwindCSS, Composer, Laravel Sanctum API, Docker, MariaDB"
    },
    {
        id: 2,
        title: "EKESAM",
        description: "EKESAM is designed to enhance operational readiness by ensuring that critical military assets remain updated and readily available. The system provides decision-makers with actionable insights into resource statuses, fostering proactive management and strategic planning. EKESAM is a secure, internal system developed to streamline and manage the Kesam catalog for use by higher-ranking military personnel.",
        urlLink: "",
        githubLink: "",
        techStack: "PHP 7, Symphony, JavaScript, Bootstrap, MySQL 7"
    },
    {
        id: 2,
        title: "Save to Amazon S3 Storage Telegram Bot",
        description: "This bot allows you to upload files sent via Telegram directly to Amazon S3 storage. Simply send a file to the bot, and it will handle the upload to your S3 bucket, providing a secure and efficient way to manage your files in the cloud. Containerize the application using Docker and deploy it on Google Cloud Platform with Google Artifact Registry and Cloud Run. I apologize for not uploading any repositories in order to protect sensitive credential keys.",
        urlLink: "https://t.me/Save2S3Bot",
        githubLink: "https://github.com/Topaz52",
        techStack: "Python, Telegram Bot API, Amazon S3, boto3, Docker, Elastic Container Registry, EC2"
    },
    {
        id: 3,
        title: "Personal Portfolio Website",
        description: "A personal portfolio website, built using Next.js! This site highlights my skills, showcases my projects, and features my achievements.",
        urlLink: "https://ismailmasseran.com/",
        githubLink: "https://github.com/Topaz52/portfolio-website",
        techStack: "Next.js, TypeScript, TailwindCSS, Google re-CAPTCHA, AWS Amplify, Amazon SES"
    },
    {
        id: 4,
        title: "Personal Blog",
        description: "Discover my personal blog website, a space dedicated to sharing my thoughts, projects, and insights in technology, data science, and web development. Here, you'll find engaging articles, tutorials, and reflections on my journey, designed to inspire and inform fellow tech enthusiasts and learners. Join me in exploring the ever-evolving world of technology through my unique perspective! Built using Next.js.",
        urlLink: "https://blog.ismailmasseran.com/",
        githubLink: "https://github.com/Topaz52/personal-blog",
        techStack: "Next.js, TypeScript, TailwindCSS, Vercel, MDX"
    },
    {
        id: 5,
        title: "Phishing Website Detection",
        description: "This project used machine learning to determine if a website is safe. It found that deep learning models, especially Bi-LSTM, were most accurate at detecting phishing websites.",
        urlLink: "https://github.com/Topaz52/Phishing-Website-Detection-using-RNN-FYP-",
        githubLink: "https://github.com/Topaz52/Phishing-Website-Detection-using-RNN-FYP-",
        techStack: "Python, Google Colab, PyTorch, Docker, Numpy, Pandas, Flask"
    },
    {
        id: 6,
        title: "Asset Tracking IoT",
        description: "This project created a device that tracks things using GPS and sends their location via text messages. It uses sensors and a microcontroller to determine location and orientation. The device is useful for preventing theft.",
        urlLink: "https://github.com/Topaz52/Asset-Tracking-IOT",
        githubLink: "https://github.com/Topaz52/Asset-Tracking-IOT",
        techStack: "C++, Arduino, MPU6050, GSM, GPS, Arduino UNO, Buzzer"
    },
    {
        id: 7,
        title: "Heart Disease using Fuzzy",
        description: "Fuzzy logic can help doctors diagnose heart disease more accurately. It considers multiple factors, like heartbeats and medical history, to provide a better understanding of a patient's risk. This is especially helpful for people who might not have obvious symptoms.",
        urlLink: "https://github.com/Topaz52/Heart-Disease-using-fuzzy",
        githubLink: "https://github.com/Topaz52/Heart-Disease-using-fuzzy",
        techStack: "Python, Numpy, Scikit-Fuzzy, Matplotlib"
    },
    {
        id: 8,
        title: "Aircraft Arrival Sequencing and Scheduling (AASS) with Genetic Algorithm",
        description: "AASS with Genetic Algorithm is a system that uses a computer program to figure out the best order and timing for planes to land at an airport. This helps to avoid delays and keep things safe.",
        urlLink: "https://github.com/Topaz52/Aircraft-Arrival-Sequencing-and-Scheduling-with-Genetic-Algorithm",
        githubLink: "https://github.com/Topaz52/Aircraft-Arrival-Sequencing-and-Scheduling-with-Genetic-Algorithm",
        techStack: "Python, Numpy, Python Notebook"
    }
]

const ProjectsSection = () => {
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
        <section id='projects' className='justify-items-center py-7 lg:py-10'>
            <motion.div animate={controls} ref={sectionRef}>
                <h1 className='text-center text-3xl md:text-5xl mt-5 font-bold p-5 text-white'>
                    PROJECTS
                </h1>
                <div className='flex flex-col items-center justify-center p-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-full'>
                        {projectsData.map((project) =>
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                urlLink={project.urlLink}
                                githubLink={project.githubLink}
                                techStack={project.techStack}
                            />
                        )}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default ProjectsSection