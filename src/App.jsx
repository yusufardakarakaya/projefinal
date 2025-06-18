import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Hero, About, Skills, Portfolio, Contact, Footer } from './components';
import { useEffect, useState } from 'react';

function MobileScrollSections() {
  // Mobilde scroll snap ile tüm bölümleri tek sayfada göster
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <section className="snap-start min-h-screen flex items-center justify-center"><Hero /></section>
      <section className="snap-start min-h-screen flex items-center justify-center"><About /></section>
      <section className="snap-start min-h-screen flex items-center justify-center"><Skills /></section>
      <section className="snap-start min-h-screen flex items-center justify-center"><Portfolio /></section>
      <section className="snap-start min-h-screen flex items-center justify-center"><Contact /></section>
      <Footer />
    </div>
  );
}

function DesktopRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/about' element={<About />} />
      <Route path='/work' element={<Skills />} />
      <Route path='/project' element={<Portfolio />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary min-h-screen flex flex-col'>
        <Navbar />
        <div className='flex-1'>
          {isMobile ? <MobileScrollSections /> : <DesktopRoutes />}
        </div>
        {!isMobile && <Footer />}
      </div>
    </BrowserRouter>
  );
}

export default App; 