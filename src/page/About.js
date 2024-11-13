import Post from "./Post"
import { AppContext } from "./AppContext";
import { useContext } from "react";
export function About() {

    const { myObject, myFunction } = useContext(AppContext);

    console.log("myObj", myObject);

    function handleTimeOut() {
        myFunction({ name: "Ashish", cart: 2340 });
    }
    return (<>
        {/* <h1>Cart Count: {AppSetting.cart}</h1> */}
        <h1>Cart Count: {myObject.cart}</h1>

        <button onClick={handleTimeOut}>update context</button>
        <Post title={'About'} />

    </>)
}