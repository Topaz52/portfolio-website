import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    description: string;
    urlLink: string;
    githubLink: string;
    techStack: string;
    logo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, urlLink, githubLink, techStack, logo }) => {
    const techList = techStack.split(', ');

    return (
        <div className="bg-primary-800 rounded-xl p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <a href={urlLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 min-w-0 flex-1">
                    {logo && (
                        <Image
                            src={logo}
                            alt=""
                            width={32}
                            height={32}
                            className="flex-shrink-0 rounded object-contain w-8 h-8"
                        />
                    )}
                    <h3 className="text-white text-xl md:text-lg font-extrabold hover:underline hover:text-secondary-500 transition-colors truncate">
                        {title}
                    </h3>
                </a>
                <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-800 hover:bg-secondary-500 text-white py-1 px-3 rounded-lg text-sm flex items-center space-x-2 flex-shrink-0"
                >
                    <span>GITHUB</span>
                    {/* GitHub Icon */}
                </a>
            </div>
            <p className="text-slate-300 text-base text-justify mb-2">
                {description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
                {techList.map((tech, index) => (
                    <div
                        key={index}
                        className="bg-primary-950 rounded-full px-3 py-1 text-white text-sm"
                    >
                        {tech}
                    </div>
                ))}
            </div>
        </div>

    );
}

export default ProjectCard;
