import { projects } from '../data/data.js';

export default function Work() {
    return (
        <div>
            <h1 className='text-9xl text-center mb-10'>Work</h1>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-10'>
                {projects.map((project, idx) => {
                    return (
                        <div key={idx} className='group h-[300px] w-full flex flex-col gap-3 overflow-hidden relative'>
                            {/* Image Wrapper with Overlay */}
                            <div className='overflow-hidden h-full flex-1 relative'>
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105'
                                />
                                <div className='absolute left-0 top-0 w-full h-full bg-black/30'></div>
                            </div>

                            {/* Title & Links */}
                            <div className='flex justify-between items-center text-xl'>
                                <h3>{project.title}</h3>
                                <div className='flex gap-4'>
                                    {project.demo ? (
                                        <a href={project.demo} target='_blank' rel='noopener noreferrer' className='hover:underline'>
                                            Show
                                        </a>
                                    ) : (
                                        <p>Contact For Demo</p>
                                    )}
                                    {project.github && (
                                        <a href={project.github} target='_blank' rel='noopener noreferrer' className='hover:underline'>
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
