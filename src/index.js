import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// import { useState } from 'react';
import Welcome from './page/Welcome'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './page/About';
import { Home } from './page/Home';
import { Contact } from './page/Contact';
import { NotFound } from './page/NotFound';
import { Help } from './page/Help';
import { Navigation } from './page/Navigation';
import { Footer } from './page/Footer';

import { ThemeProvider } from './page/ThemeContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const [isEnableNav, setIsEnableNav] = useState(true);

// let isEnableNav=false
// const toggleTheme = () => {
//   // setIsEnableNav(!isEnableNav);
//   isEnableNav=!isEnableNav;
// };
root.render(
  <React.StrictMode>
    <>
      <ThemeProvider>

        <Navigation />
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
      
      </ThemeProvider>

      <Footer />

    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
