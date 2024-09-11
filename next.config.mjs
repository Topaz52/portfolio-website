/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
        NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      // Add other environment variables here
    },
    // Other Next.js config options can be added here
  };
  
  export default nextConfig;
  