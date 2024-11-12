import { useState } from "react";
import { Banner } from "./Banner";

export default function Welcome() {
  const [showBanner,setShowBanner] = useState(false);

  let component;
  if (showBanner === true) {
    component = <Banner />
  }

  function handleBanner(enableBanner) {
    console.log("handleBanner",enableBanner);

    if (enableBanner) {
      // showBanner = true; // its wrong beacuse const cannot be re-assinged
      setShowBanner(true)
    } else {
      // showBanner = false;
      setShowBanner(false)
    }


    console.log("showBanner",showBanner);
  }
  return (<>
    <h1>Welcome Component</h1>
    {component}

    {/* //Identify problem why button not able to change component */}

     <button onClick={() => handleBanner(true)}>Show Banner</button>
    <button onClick={() => handleBanner(false)}>Hide Banner</button> 


  </>)
}