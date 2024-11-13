import { useState } from "react";
import { Banner } from "./Banner";
import { Help } from "./Help";

export default function Welcome() {

  // let showBanner = true;
  const [showBanner,setShowBanner] = useState(false);

  let component = <Help/>
  if (showBanner === true) {
    component = <Banner />
  }



  return (<>
    <h1>Welcome Component</h1>
    {component}



  </>)
}