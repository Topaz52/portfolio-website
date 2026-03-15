import React from 'react'

const Footer = () => {
    return (
        <footer className='footer border border-t-primary-800 border-l-transparent border-r-transparent border-b-transparent text-white'>
            <div className='container py-2 px-5 flex justify-start text-xs md:text-sm text-slate-500'>
                <p>Designed & developed by Ismail • Built with Next.js • Deployed on AWS Amplify</p>
            </div>
        </footer>
    )
}

export default Footer