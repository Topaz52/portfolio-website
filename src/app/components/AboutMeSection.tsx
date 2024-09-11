"use client";

import React, { useRef, useState, useEffect } from 'react';
import TimelineFrame from './TimelineFrame';
import { motion, useAnimation } from 'framer-motion';

const timelineData = [
    {
        id: 1,
        location: "SMKA Wataniah, Besut",
        endDate: "Jan 2014 - Dis 2018",
        course: "Science Stream",
        achieveList: [
            "Achieved 7As, 1B, 2Cs, and 1D in my SPM exam."
        ]
    },
    {
        id: 2,
        location: "UiTM Chendering, Kuala Terengganu",
        endDate: "Jul 2019 - Feb 2022",
        course: "Diploma in Computer Science",
        achieveList: [
            "Cumulative GPA: 3.76",
            "Awarded Anugerah Naib Canselor (ANC) for academic excellence"
        ]
    },
    {
        id: 3,
        location: "Pejabat Daerah Besut, Besut",
        endDate: "Sep 2021 - Feb 2022",
        course: "Internship",
        achieveList: [
            "Editing poster and videos for Hari Sukan Negara for PUSPANITA using Adobe Photoshop.",
            "Joined volunteer efforts for the School Aid Program 2021, ensuring timely delivery of supplies to schools, benefiting 1,000+ students and lighten the burden of children's schooling expenses borne by parents by 25%.",
            "Created montage video about Hari Sukan Negara for PUSPANITA."
        ]
    },
    {
        id: 4,
        location: "UiTM Shah Alam, Shah Alam",
        endDate: "Mac 2022 - June 2024",
        course: "Bachelor of Information Systems (Hons.) Intelligent Systems Engineering",
        achieveList: [
            "Cumulative GPA: 3.51",
        ]
    },
    {
        id: 5,
        location: "MYCES Sdn. Bhd.",
        endDate: "Mac 2024 - June 2024",
        course: "Internship",
        achieveList: [
            "Conducted data analysis and cleaning, reducing missing values by 40% using KNN imputer and linear interpolation.",
            "Compared ARIMA and LSTM models for energy usage forecasting, selecting LSTM for its superior accuracy.",
        ]
    },
    {
        id: 6,
        location: "Unemployed",
        endDate: "June 2024 - Sep 2024",
        course: "Unemployed",
        achieveList: [
            "Currently learning cloud computing skills from AWS",
        ]
    }
];

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
        <section id='about' className='text-white py-3 lg:py-10'>
            <motion.div animate={controls} ref={sectionRef}>
                <div className='flex flex-col items-center py-14 px-4'>
                    <h2 className='text-3xl font-bold text-white mb-4 md:text-5xl'>
                        ABOUT ME
                    </h2>
                    <p className='text-sm font-thin text-justify text-slate-300'>
                        I&aposm ISMAIL, a data science student fuelled by a passion for uncovering insights from data.
                        While I&aposm still early in my journey, I possess a foundational understanding of Python, a most used data scientist languages.
                        Some libraries that I familiar with are Pandas, Numpy, Seaborn, Tensorflow, and MatPlotLib.
                        I am eager to leverage this knowledge alongside my data analysis skills to contribute to impactful projects.
                        In my free time, I enjoy doing Leet Code, which I find helps me approach problems from different angles.
                    </p>
                </div>
                {/* Timeline Section */}
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                    {timelineData.map((timeline, index) =>
                        <TimelineFrame
                            key={timeline.id}
                            location={timeline.location}
                            endDate={timeline.endDate}
                            course={timeline.course}
                            achieveList={timeline.achieveList}
                            isLast={index === timelineData.length - 1}
                        />
                    )}
                </div>
            </motion.div>
        </section>
    );
};

export default AboutMeSection;