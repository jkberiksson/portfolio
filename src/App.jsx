import Header from './components/Header';
import Work from './pages/Work';
import About from './pages/About';

import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className='min-h-dvh pt-6 pb-20 font-bebop text-black overflow-hidden container mx-auto'>
            <Header />
            <Routes>
                <Route path='/' element={<Work />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
    );
}

export default App;
