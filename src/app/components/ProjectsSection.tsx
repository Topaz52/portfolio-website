"use client"

import React, { useRef, useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import { motion, useAnimation } from 'framer-motion';

const projectsData = [
    {
        id: 1,
        title: "Phishing Website Detection",
        description: "This project used machine learning to determine if a website is safe. It found that deep learning models, especially Bi-LSTM, were most accurate at detecting phishing websites.",
        urlLink: "https://github.com/Topaz52/Phishing-Website-Detection-using-RNN-FYP-",
        githubLink: "https://github.com/Topaz52/Phishing-Website-Detection-using-RNN-FYP-"
    },
    {
        id: 2,
        title: "Asset Tracking IoT",
        description: "This project created a device that tracks things using GPS and sends their location via text messages. It uses sensors and a microcontroller to determine location and orientation. The device is useful for preventing theft.",
        urlLink: "https://github.com/Topaz52/Asset-Tracking-IOT",
        githubLink: "https://github.com/Topaz52/Asset-Tracking-IOT"
    },
    {
        id: 3,
        title: "Heart Disease using Fuzzy",
        description: "Fuzzy logic can help doctors diagnose heart disease more accurately. It considers multiple factors, like heartbeats and medical history, to provide a better understanding of a patient's risk. This is especially helpful for people who might not have obvious symptoms.",
        urlLink: "https://github.com/Topaz52/Heart-Disease-using-fuzzy",
        githubLink: "https://github.com/Topaz52/Heart-Disease-using-fuzzy"
    },
    {
        id: 4,
        title: "Aircraft Arrival Sequencing and Scheduling (AASS) with Genetic Algorithm",
        description: "AASS with Genetic Algorithm is a system that uses a computer program to figure out the best order and timing for planes to land at an airport. This helps to avoid delays and keep things safe.",
        urlLink: "https://github.com/Topaz52/Aircraft-Arrival-Sequencing-and-Scheduling-with-Genetic-Algorithm",
        githubLink: "https://github.com/Topaz52/Aircraft-Arrival-Sequencing-and-Scheduling-with-Genetic-Algorithm"
    },
    {
        id: 5,
        title: "Save to Amazon S3 Storage Telegram Bot",
        description: "This bot allows you to upload files sent via Telegram directly to Amazon S3 storage. Simply send a file to the bot, and it will handle the upload to your S3 bucket, providing a secure and efficient way to manage your files in the cloud. Containerize the application using Docker and deploy it on Google Cloud Platform with Google Artifact Registry and Cloud Run. I apologize for not uploading any repositories in order to protect sensitive credential keys.",
        urlLink: "https://t.me/Save2S3Bot",
        githubLink: "https://github.com/Topaz52"
    },
    {
        id: 6,
        title: "Personal Portfolio Website",
        description: "A personal portfolio website, built using Next.js! This site highlights my skills, showcases my projects, and features my achievements. I apologize for not being able to provide access to the project repository, as it contains sensitive information like API keys.",
        urlLink: "https://ismailmasseran.com/",
        githubLink: "https://github.com/Topaz52"
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
                <h1 className='text-center text-3xl md:text-5xl mt-5 font-bold p-5'>
                    PROJECTS
                </h1>
                <div className='flex flex-col items-center justify-center p-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl'>
                        {projectsData.map((project) =>
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                urlLink={project.urlLink}
                                githubLink={project.githubLink}
                            />
                        )}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default ProjectsSection