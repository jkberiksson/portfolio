import Header from './components/Header';
import Footer from './components/Footer';
import Work from './pages/Work';
import About from './pages/About';

import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className='min-h-dvh p-4 font-bebop text-black overflow-hidden'>
            <Header />
            <Routes>
                <Route path='/' element={<Work />} />
                <Route path='/about' element={<About />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
