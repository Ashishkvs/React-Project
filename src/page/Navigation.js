import  '../css/Navigation.css'
import AppSetting from './AppSetting'
export function Navigation(){
    return(<>
     <ul className='nav'>
            <li></li>
            <li><a href="home">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="contact">Contact</a></li>
            <li><a href="welcome">Welcome</a></li>
            <li><a href="help">Help</a></li>
            <li><a href="profile">{AppSetting.name}</a></li>

            
     

        </ul>
    </>)
}