import { motion } from 'framer-motion';
import me from '../data/mememe.jpg';

export default function Home() {
    return (
        <motion.div
            className='h-[90dvh] flex flex-col justify-between px-4 overflow-hidden relative'
            exit={{ y: '-100vh', opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}>
            {/* "FRONTEND" Text */}
            <motion.div
                className='text-6xl lg:text-[160px] font-extrabold text-white'
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}>
                FRONTEND
            </motion.div>

            {/* Image with subtle scale animation */}
            <motion.img
                className='w-[230px] h-[300px] lg:w-[450px] lg:h-[600px] object-cover self-center rounded-lg'
                src={me}
                alt='me'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            />

            {/* "DEVELOPER" Text */}
            <motion.div
                className='text-6xl lg:text-[160px] font-extrabold text-right text-white'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}>
                DEVELOPER
            </motion.div>

            {/* Quotes */}
            <Qoute1 />
            <Qoute2 />
        </motion.div>
    );
}

function Qoute1() {
    return (
        <motion.p
            className='absolute top-24 lg:top-56 left-4 w-[250px] text-sm lg:text-base text-gray-300'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}>
            I craft seamless, innovative digital experiences that connect people and ideas.
        </motion.p>
    );
}

function Qoute2() {
    return (
        <motion.p
            className='absolute bottom-24 lg:bottom-56 right-4 w-[250px] text-sm lg:text-base text-gray-300 text-right'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}>
            Driven by creativity and code, I turn visions into captivating, user-centered designs.
        </motion.p>
    );
}
