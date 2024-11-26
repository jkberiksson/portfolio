import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function SideIcons() {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className='fixed right-0 pr-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20'>
            <div className='w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-slate-800'>
                <a href='https://github.com/jkberiksson' target='_blank'>
                    <FiGithub color='white' size={18} />
                </a>
            </div>
            <div className='w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-slate-800'>
                <a href='mailto: jkberiksson@gmail.com'>
                    <FiMail color='white' size={18} />
                </a>
            </div>
            <div className='w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-slate-800'>
                <a href='https://www.linkedin.com/in/jakob-eriksson-60904b207/' target='_blank'>
                    <FiLinkedin color='white' size={18} />
                </a>
            </div>
        </motion.div>
    );
}
