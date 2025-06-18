import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Hero, About, Skills, Portfolio, Contact, Footer } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary min-h-screen flex flex-col'>
        <Navbar />
        <div className='flex-1'>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<About />} />
            <Route path='/work' element={<Skills />} />
            <Route path='/project' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App; 