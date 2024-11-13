"use client"

import React, { useRef, useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import { motion, useAnimation } from 'framer-motion';

const projectsData = [
    {
        id: 1,
        title: "Phishing Website Detection",
        description: "This project used machine learning to determine if a website is safe. It found that deep learning models, especially Bi-LSTM, were most accurate at detecting phishing websites.",
        urlLink: "https://projects.ismailmasseran.com/",
        githubLink: "https://github.com/Topaz52/Phishing-Website-Detection-using-RNN-FYP-",
        techStack: "Python, Google Colab, PyTorch, Docker, Numpy, Pandas, Flask, Artifacts Registry, Cloud Run"
    },
    {
        id: 2,
        title: "Asset Tracking IoT",
        description: "This project created a device that tracks things using GPS and sends their location via text messages. It uses sensors and a microcontroller to determine location and orientation. The device is useful for preventing theft.",
        urlLink: "https://github.com/Topaz52/Asset-Tracking-IOT",
        githubLink: "https://github.com/Topaz52/Asset-Tracking-IOT",
        techStack: "C++, Arduino, MPU6050, GSM, GPS, Arduino UNO, Buzzer"
    },
    {
        id: 3,
        title: "Heart Disease using Fuzzy",
        description: "Fuzzy logic can help doctors diagnose heart disease more accurately. It considers multiple factors, like heartbeats and medical history, to provide a better understanding of a patient's risk. This is especially helpful for people who might not have obvious symptoms.",
        urlLink: "https://github.com/Topaz52/Heart-Disease-using-fuzzy",
        githubLink: "https://github.com/Topaz52/Heart-Disease-using-fuzzy",
        techStack: "Python, Numpy, Scikit-Fuzzy, Matplotlib"
    },
    {
        id: 4,
        title: "Aircraft Arrival Sequencing and Scheduling (AASS) with Genetic Algorithm",
        description: "AASS with Genetic Algorithm is a system that uses a computer program to figure out the best order and timing for planes to land at an airport. This helps to avoid delays and keep things safe.",
        urlLink: "https://github.com/Topaz52/Aircraft-Arrival-Sequencing-and-Scheduling-with-Genetic-Algorithm",
        githubLink: "https://github.com/Topaz52/Aircraft-Arrival-Sequencing-and-Scheduling-with-Genetic-Algorithm",
        techStack: "Python, Numpy, Python Notebook"
    },
    {
        id: 5,
        title: "Save to Amazon S3 Storage Telegram Bot",
        description: "This bot allows you to upload files sent via Telegram directly to Amazon S3 storage. Simply send a file to the bot, and it will handle the upload to your S3 bucket, providing a secure and efficient way to manage your files in the cloud. Containerize the application using Docker and deploy it on Google Cloud Platform with Google Artifact Registry and Cloud Run. I apologize for not uploading any repositories in order to protect sensitive credential keys.",
        urlLink: "https://t.me/Save2S3Bot",
        githubLink: "https://github.com/Topaz52",
        techStack: "Python, Telegram Bot API, Amazon S3, boto3, Docker, Artifacts Registry, Cloud Run"
    },
    {
        id: 6,
        title: "Personal Portfolio Website",
        description: "A personal portfolio website, built using Next.js! This site highlights my skills, showcases my projects, and features my achievements.",
        urlLink: "https://ismailmasseran.com/",
        githubLink: "https://github.com/Topaz52/portfolio-website",
        techStack: "Next.js, TypeScript, TailwindCSS, Google re-CAPTCHA, AWS Amplify, Amazon SES"
    },
    {
        id: 7,
        title: "Personal Blog",
        description: "Discover my personal blog website, a space dedicated to sharing my thoughts, projects, and insights in technology, data science, and web development. Here, you'll find engaging articles, tutorials, and reflections on my journey, designed to inspire and inform fellow tech enthusiasts and learners. Join me in exploring the ever-evolving world of technology through my unique perspective! Built using Next.js.",
        urlLink: "https://blog.ismailmasseran.com/",
        githubLink: "https://github.com/Topaz52/personal-blog",
        techStack: "Next.js, TypeScript, TailwindCSS, Vercel, MDX"
    },
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