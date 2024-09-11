/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MYAPP_ACCESS_KEY_ID: process.env.MYAPP_ACCESS_KEY_ID,
        MYAPP_SECRET_ACCESS_KEY: process.env.MYAPP_SECRET_ACCESS_KEY,
        NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      // Add other environment variables here
    },
    // Other Next.js config options can be added here
  };
  
  export default nextConfig;
  