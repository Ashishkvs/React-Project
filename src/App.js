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
import { AppContext } from './page/AppContext';
import { useState } from 'react';

function App() {


  let isEnable = true;
  function appNavFunction() {

  }

  // let myObject= {
  //   name: "Newtam",
  //   cart: 5000,
  // }
  const [myObject, setMyObject] = useState({
    name: "Newtam",
    cart: 5000,
  })

  function myFunction(myValue) {
    console.log("calling myFunction from global context", myValue);
    //  myObject = myValue;
    setMyObject(myValue);

  }
  return (
    <>
      <AppContext.Provider value={{ myObject, myFunction }}>
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
      </AppContext.Provider>

    </>
  );
}

export default App;
