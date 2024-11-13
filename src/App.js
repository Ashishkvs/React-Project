import './App.css';
import Welcome from './page/Welcome'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './page/About';
import { Home } from './page/Home';
import { Contact } from './page/Contact';
import { NotFound } from './page/NotFound';
import { Help } from './page/Help';
import { Navigation } from './page/Navigation';
import { Footer } from './page/Footer';
import { NavContext } from './page/NavContext';

function App() {


  let isEnable = true;
  function appNavFunction() {

  }
  return (
    <>
      <NavContext.Provider value={{ isEnable, appNavFunction }}>
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
      <Footer />
      </NavContext.Provider>

    </>
  );
}

export default App;
