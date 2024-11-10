import { Banner } from "./Banner";
import { Help } from "./Help";

export default function Welcome() {

  let showBanner = false;

  let component = <Help/>
  if (showBanner === true) {
    component = <Banner />
  }

  function handleBanner(enableBanner) {
    console.log("handleBanner",enableBanner);

    if (enableBanner) {
      showBanner = true;
    } else {
      showBanner = false;
    }


    console.log("showBanner",showBanner);
  }
  return (<>
    <h1>Welcome Component</h1>
    {component}

     <button onClick={() => handleBanner(true)}>Show Banner</button>
    <button onClick={() => handleBanner(false)}>Hide Banner</button> 


  </>)
}