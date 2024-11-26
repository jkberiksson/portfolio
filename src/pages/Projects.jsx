import { projects } from '../data/data.js';
import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <motion.div
            className='min-h-screen px-4 flex flex-col overflow-hidden'
            exit={{ y: '-50%', opacity: 0, scale: 0.9, rotate: 5 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}>
            <motion.div
                className='text-6xl lg:text-[160px] font-extrabold text-white mb-12'
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}>
                PROJECTS
            </motion.div>

            {/* Project List */}
            <div className='flex flex-col gap-16 mb-12 lg:self-center'>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className='relative'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeOut',
                            delay: index * 0.1,
                        }}>
                        <div>
                            <h3 className='text-xl font-semibold'>{project.title}</h3>
                            <p className='text-gray-400 mt-1'>{project.description}</p>
                            <div className='flex flex-wrap gap-2 mt-3'>
                                {project.tags.map((tag, i) => (
                                    <span key={i} className='bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded-full'>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className='flex gap-6 mt-3'>
                                <a href={project.link} target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline'>
                                    View Demo
                                </a>
                                {project.repo && (
                                    <a
                                        href={project.repo}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-blue-400 hover:underline'>
                                        View Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
