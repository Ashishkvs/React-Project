import './App.css';
import { useState } from 'react';
import Welcome from './page/Welcome'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './page/About';
import { Home } from './page/Home';
import { Contact } from './page/Contact';
import { NotFound } from './page/NotFound';
import { Help } from './page/Help';
import { Navigation } from './page/Navigation';
import { Footer } from './page/Footer';

import { ThemeContext } from './page/ThemeContext';

function App() {
  const [isEnableNav, setIsEnableNav] = useState(true);

  const toggleTheme = () => {
    setIsEnableNav(!isEnableNav);
  };

  return (<>
    {isEnableNav && <Navigation />}

    <ThemeContext.Provider value={{ isEnableNav, toggleTheme }}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/welcome" element={<Welcome />} />
          {/* //TODO  fix duplicate routing issue */}
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </ThemeContext.Provider>

    <Footer />

  </>
  );
}

export default App;
