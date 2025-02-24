import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Header() {
    const location = useLocation();
    const [isHome, setIsHome] = useState(true);

    useEffect(() => {
        setIsHome(location.pathname === '/');
    }, [location]);

    return (
        <header className='flex justify-between items-center text-xl mb-[100px]'>
            <Link to='/'>
                <div>Jakob Eriksson</div>
            </Link>
            <div className='flex gap-8'>
                <div className='rounded-full flex items-center justify-center cursor-pointer'>
                    <a href='https://github.com/jkberiksson' target='_blank'>
                        <FiGithub color='black' size={20} />
                    </a>
                </div>
                <div className='rounded-full flex items-center justify-center cursor-pointer'>
                    <a href='mailto: jkberiksson@gmail.com'>
                        <FiMail color='black' size={20} />
                    </a>
                </div>
                <div className='rounded-full flex items-center justify-center cursor-pointer'>
                    <a href='https://www.linkedin.com/in/jakob-eriksson-60904b207/' target='_blank'>
                        <FiLinkedin color='black' size={20} />
                    </a>
                </div>
            </div>
            <Link to={isHome ? '/about' : '/'}>
                <div className='bg-black text-[#eee] px-4 py-2'>{isHome ? 'about' : 'home'}</div>
            </Link>
        </header>
    );
}
