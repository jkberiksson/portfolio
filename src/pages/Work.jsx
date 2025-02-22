import { projects } from '../data/data.js';

export default function Work() {
    return (
        <div>
            <h1 className='text-9xl text-center'>Work</h1>
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

                                {/* Description Overlay - Shown on Hover */}
                                <div className='absolute inset-0 flex items-center justify-center bg-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4 text-[#eee] text-center'>
                                    <p className='text-base font-sans text-center'>{project.description}</p>
                                </div>
                            </div>

                            {/* Title & Links */}
                            <div className='flex justify-between items-center text-xl'>
                                <h3>{project.title}</h3>
                                <div className='flex gap-4'>
                                    <a href={project.demo} target='_blank' rel='noopener noreferrer' className='hover:underline'>
                                        Live Demo
                                    </a>
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
