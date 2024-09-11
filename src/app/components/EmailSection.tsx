"use client"
import React, { useState, useRef, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha'
import { motion, useAnimation } from 'framer-motion';

const EmailSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false); // State to track submission progress
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission
        setLoading(true); // Set loading to true at the start
        setStatus(''); // Reset status message

        const token = recaptchaRef.current?.getValue(); // Get CAPTCHA token
        if (!token) {
            alert('Please complete the CAPTCHA');
            setLoading(false); // Set loading to false if CAPTCHA is not completed
            return;
        }

        // Logging CAPTCHA token for debugging
        console.log('CAPTCHA token:', token);

        try {
            // Sending form data along with the token to your backend
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, token }), // Include CAPTCHA token with formData
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('Email sent successfully!'); // Success message
                setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form data
            } else {
                setStatus(result.error || 'Failed to send email'); // Error message from server
            }
        } catch (error) {
            setStatus('An unexpected error occurred'); // Handle unexpected errors
        } finally {
            setLoading(false); // Ensure loading is set to false when finished
        }
    };

    const onCaptchaChange = (value: string | null) => {
        setCaptchaVerified(!!value); // Verify if CAPTCHA was successfully completed
    };

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
        <section id='contacts' className='flex flex-col items-center justify-center py-14 md:py-20'>
            <motion.div animate={controls} ref={sectionRef}>
                <h5 className='lg:text-2xl text-xl font-bold text-white my-2 text-center'>
                    Let&apos Connect
                </h5>
                <p className='text-slate-300 mb-4 max-w-md text-center'>
                    I&aposm currently looking for new opportunities, my inbox is always open.
                </p>
                <div className='bg-primary-800 p-8 rounded-lg'>
                    <form className='flex flex-col' onSubmit={handleSubmit}>
                        <div className='mb-6'>
                            <label htmlFor='name' className='text-white block mb-2 text-sm font-medium'>
                                Name
                            </label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className='bg-transparent border-2 border-secondary-800 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5'
                                placeholder='Enter your name'
                            />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>
                                Email
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className='bg-transparent border-2 border-secondary-800 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5'
                                placeholder='abc@example.com'
                            />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>
                                Subject
                            </label>
                            <input
                                type='text'
                                id='subject'
                                name='subject'
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                className='bg-transparent border-2 border-secondary-800 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5'
                                placeholder='Enter your subject'
                            />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>
                                Message
                            </label>
                            <textarea
                                id='message'
                                name='message'
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className='bg-transparent border-2 border-secondary-800 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-2.5'
                                placeholder='Write your message here'
                            />
                        </div>
                        <div className='captcha-container flex justify-center items-center'>
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} // Replace with your Google reCAPTCHA site key
                                onChange={onCaptchaChange}
                            />
                        </div>
                        <button
                            type='submit'
                            className='bg-secondary-800 hover:bg-secondary-500 text-white font-medium py-2.5 px-5 rounded-lg w-full flex justify-center items-center'
                            disabled={loading || !captchaVerified} // Disable button when loading
                        >
                            {loading ? (
                                <svg
                                    className='animate-spin h-5 w-5 mr-3 text-white items-center'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                >
                                    <circle
                                        className='opacity-25'
                                        cx='12'
                                        cy='12'
                                        r='10'
                                        stroke='currentColor'
                                        strokeWidth='4'
                                    ></circle>
                                    <path
                                        className='opacity-75'
                                        fill='currentColor'
                                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'
                                    ></path>
                                </svg>
                            ) : (
                                'Submit'
                            )}
                        </button>
                        {status && (
                            <div
                                className={`mt-2 p-2 text-center flex justify-center items-center space-x-2 ${status.includes('success')
                                    ? 'text-green-300 font-light'
                                    : 'text-[#EF1212] font-light'
                                    } `}
                            >
                                {status.includes('success') ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                                        <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"></path>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                                        <path fill="#EF1212" d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
                                    </svg>
                                )}
                                <span>{status}</span>
                            </div>
                        )}
                    </form>
                </div>
            </motion.div>
        </section>
    );
};

export default EmailSection;