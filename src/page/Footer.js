import '../css/Footer.css'
import { useContext, useEffect } from 'react';
import { NavContext } from './NavContext'
import { AppContext } from './AppContext';
// import AppSetting from './AppSetting';
export function Footer() {
    const { showBanner, setShowBanner } = useContext(NavContext);




    const { myObject, myFunction } = useContext(AppContext);

    console.log("showBanner", showBanner);

    useEffect(() => {
        myFunction({
            name: 'Surila',
            cart: 23423
        });

    }, [])

    // AppSetting.cart=15;
    return (<>
        <div className='footer-nav'>
            <h1>Cart Count: {myObject.cart} And name  {myObject.name}</h1>
            <ul >
                <li><a href="/">App</a></li>

                {showBanner && <h1>Show banner is  enable</h1>}
            </ul>

        </div>
    </>)
}