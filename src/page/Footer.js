import '../css/Footer.css'
import { useContext } from 'react';
import { NavContext } from './NavContext'
import AppSetting from './AppSetting';
export function Footer() {
    const {showBanner,setShowBanner} = useContext(NavContext);
    console.log("showBanner", showBanner);

    AppSetting.cart=15;
    return (<>
        <div className='footer-nav'>
            <h1>Cart Count: {AppSetting.cart}</h1>
            <ul >
                <li><a href="/">App</a></li>

            {showBanner && <h1>Show banner is  enable</h1>}
            </ul>
          
        </div>
    </>)
}