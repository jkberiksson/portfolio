import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const [isHome, setIsHome] = useState(true);

    useEffect(() => {
        setIsHome(location.pathname === '/');
    }, [location]);

    return (
        <header className='flex justify-between items-center text-xl mb-[100px]'>
            <Link to='/'>
                <div className='flex flex-col'>
                    <div>Jakob Eriksson</div>
                    <div>Frontend Developer</div>
                </div>
            </Link>
            <Link to={isHome ? '/about' : '/'}>
                <div className='bg-black text-[#eee] px-4 py-2'>{isHome ? 'about' : 'home'}</div>
            </Link>
        </header>
    );
}
