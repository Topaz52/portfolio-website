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
        location: "MYCES Sdn. Bhd., Kajang",
        endDate: "Mac 2024 - June 2024",
        course: "Internship",
        achieveList: [
            "Conducted data analysis and cleaning, reducing missing values by 40% using KNN imputer and linear interpolation.",
            "Compared ARIMA and LSTM models for energy usage forecasting, selecting LSTM for its superior accuracy.",
        ]
    },
    {
        id: 6,
        location: "MAXVEC Sdn Bhd., Wangsa Maju",
        endDate: "Nov 2024 -  Present",
        course: "Protege - Programmer",
        achieveList: [
            "Assisted in deploying the bioAims web application on a local server using Windows Server IIS, ensuring proper configuration and functionality.",
            "Gained proficiency in core Laravel concepts (Models, Views, Controllers).",
            "Maintained the EKESAM legacy system, ensuring stability and ongoing functionality.",
            "Optimized EKESAM dashboard loading times from 15 seconds to 2 seconds by integrating AJAX for improved performance."
            // "Gained proficiency in core Laravel concepts (Models, Views, Controllers) while contributing to the development of the bioAims web application.",
            // "Developed and documented procedures for deploying, backing up/restoring, and troubleshooting the bioAims application to ensure its reliability and stability.",
            // "Streamlined operational procedures related to application lifecycle management, minimizing downtime and improving efficiency."
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
                    <p className='text-lg font-thin text-justify text-slate-200'>
                        I&apos;m ISMAIL, a data science student fueled by a passion for uncovering insights from data. While I&apos;m still early in my journey, I possess a
                        foundational understanding of Python, one of the most widely used programming languages in data science. I am familiar with libraries such as Pandas,
                        Numpy, Seaborn, TensorFlow, and Matplotlib. I am eager to leverage this knowledge alongside my data analysis skills to contribute to impactful projects.
                        Currently, I am working at MAXVEC as a Protege Programmer, where I primarily work on projects utilizing Laravel and Symfony. I am also responsible for
                        maintaining the EKESAM system, ensuring its stability and performance.
                        In my free time, I enjoy solving challenges on LeetCode, which helps me approach problems from different angles and refine my problem-solving skills.
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