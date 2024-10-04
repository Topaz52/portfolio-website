"use client";

import React, { useEffect } from 'react';

const CertificatesSection = () => {
  useEffect(() => {
    // Load the Credly embed script dynamically after the component mounts
    const script = document.createElement('script');
    script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-5 text-center">
      {/* <h1 className="text-center text-3xl md:text-5xl mb-5 font-bold p-5">BADGES AND CERTIFICATES</h1> */}
      <div className='w-full md:w-[calc(50%-2.5rem)] bg-primary-400 p-4 rounded-xl shadow mx-auto'>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex justify-center items-center">
            <div
              data-iframe-width="150"
              data-iframe-height="235"
              data-share-badge-id="aeb95b43-01a6-44ed-8352-c095d21fb2e3"
              data-share-badge-host="https://www.credly.com"
            ></div>
          </div>
          <div className="flex justify-center items-center">
            <div
              data-iframe-width="150"
              data-iframe-height="235"
              data-share-badge-id="dfe6582a-f9f9-44ae-b6f3-2d1feec18f41"
              data-share-badge-host="https://www.credly.com"
            ></div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default CertificatesSection;
