import React from 'react'

interface ProjectCardProps {
    title: string;
    description: string;
    urlLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, urlLink }) => {
    return (
        <div className="bg-primary-800 rounded-xl p-6 shadow-lg" >
            <div className="flex justify-between items-center mb-4">
                <a href={urlLink} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-white text-xl font-bold">{title}</h3>
                </a>
                <a href={urlLink} target="_blank" rel="noopener noreferrer" className="bg-secondary-800 hover:bg-secondary-500 text-white py-1 px-3 rounded-full text-sm flex items-center space-x-2">
                    <span>GITHUB</span>
                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.52-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.64 3.95.29.25.54.73.54 1.47 0 1.06-.01 1.92-.01 2.18 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                </a>
            </div>
            <p className="text-slate-300 text-sm text-justify">
                {description}
            </p>
        </div >
    )
}

export default ProjectCard
