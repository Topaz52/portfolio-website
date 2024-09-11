import React from 'react'

interface TimelineFrameProps {
    location: string;
    endDate: string;
    course: string;
    achieveList: string[];
    isLast: boolean;
}

const TimelineFrame: React.FC<TimelineFrameProps> = ({ location, endDate, course, achieveList, isLast }) => {
    return (
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* <!-- Icon --> */}
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white ${isLast ? 'bg-orange-500' : 'bg-green-600'} text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}>
                {isLast ? (
                    // Progress icon for the last card
                    <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none" />
                        <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" fill="none" />
                    </svg>
                ) : (
                    // Default icon
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                        <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                    </svg>
                )}
            </div>
            {/* <!-- Card --> */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-primary-800 p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-white">{location}</div>
                    <time className="font-caveat font-medium text-primary-100">{endDate}</time>
                </div>
                <div className="text-slate-300">
                    <p className='text-white font-normal'>{course}</p>
                    <ul className="list-disc ml-5">
                        {achieveList.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TimelineFrame