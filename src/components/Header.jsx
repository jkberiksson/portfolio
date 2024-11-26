import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <motion.header
            className='h-[10dvh] flex items-center justify-between px-4'
            initial={{ y: '-10vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}>
            <h1 className='text-xl font-extralight'>JAKOB ERIKSSON</h1>
            <nav>
                <ul className='flex gap-4'>
                    <li>
                        <NavLink to='/' className={({ isActive }) => `text-base font-medium ${isActive ? 'text-white' : 'text-gray-400'}`}>
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/projects'
                            className={({ isActive }) => `text-base font-medium ${isActive ? 'text-white' : 'text-gray-400'}`}>
                            PROJECTS
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </motion.header>
    );
}
