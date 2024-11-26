import Header from './components/Header';
import SideIcons from './components/SideIcons';
import Home from './pages/Home';
import Projects from './pages/Projects';

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
    const location = useLocation();
    return (
        <div className='font-dm-sans text-[#e3e3e3]'>
            <Header />
            <SideIcons />
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;
