"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const CertificatesSection = () => {
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

  useEffect(() => {
    // Load the Credly embed script dynamically after the component mounts
    const script = document.createElement('script');
    script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="certificates" className="py-5 text-center">
      <motion.div animate={controls} ref={sectionRef}>
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-8 mt-5 px-5">
          BADGES AND CERTIFICATES
        </h2>
        <div className="w-full md:w-[calc(50%-2.5rem)] bg-primary-400 p-4 rounded-xl shadow mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Badge 1 */}
          <div className="flex justify-center items-center">
            <div
              data-iframe-width="180"
              data-iframe-height="235"
              data-share-badge-id="aeb95b43-01a6-44ed-8352-c095d21fb2e3"
              data-share-badge-host="https://www.credly.com"
            ></div>
          </div>
          {/* Badge 2 */}
          <div className="flex justify-center items-center">
            <div
              data-iframe-width="180"
              data-iframe-height="235"
              data-share-badge-id="dfe6582a-f9f9-44ae-b6f3-2d1feec18f41"
              data-share-badge-host="https://www.credly.com"
            ></div>
          </div>
          {/* Badge 3 */}
          <div className="flex justify-center items-center">
            <div
              data-iframe-width="180"
              data-iframe-height="235"
              data-share-badge-id="6b368269-26eb-46d1-85ca-143277e078d8"
              data-share-badge-host="https://www.credly.com"
            ></div>
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default CertificatesSection;
