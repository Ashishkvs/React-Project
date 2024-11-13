import '../css/Footer.css'
import { useContext } from 'react';
import { NavContext } from './NavContext'
export function Footer() {
    const {showBanner,setShowBanner} = useContext(NavContext);
    console.log("showBanner", showBanner);

    

    return (<>
        <div className='footer-nav'>
            <ul >
                <li><a href="/">App</a></li>

            {showBanner && <h1>Show banner is enable</h1>}
            </ul>
          
        </div>
    </>)
}