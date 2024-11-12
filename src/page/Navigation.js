import { useContext } from 'react'
import '../css/Navigation.css'
import { ThemeContext } from './ThemeContext'

export function Navigation() {
    const { theme} = useContext(ThemeContext);

    return (<>
        {theme &&
            <ul className='nav'>
                <li><a href="/">App</a></li>
                <li><a href="home">Home</a></li>
                <li><a href="about">About</a></li>
                <li><a href="contact">Contact</a></li>
                <li><a href="welcome">Welcome</a></li>
                <li><a href="help">Help</a></li>
            </ul>
        }
    </>)
}