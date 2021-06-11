import { useContext } from 'react'
import { Link } from 'react-router-dom'
import DarkModeProvider from '../contexts/DarkModeContext'
import '../styles/Navbar.scss'

function Navbar() {
    const [darkMode, setDarkMode] = useContext(DarkModeProvider.context)
    
    const indicator = <div className='indicator' onClick={ () =>  
        { darkMode ? setDarkMode(false) : setDarkMode(true)}}></div>
    
    const activeIndicator = <div className='activeIndicator' onClick={ () =>  
        { darkMode ? setDarkMode(false) : setDarkMode(true)}}></div>

    return (
        <nav id={ darkMode ? 'dark' : ''}>
            { darkMode 
                ? <div id='activeToggle'> {activeIndicator} </div>
                : <div id='toggle'> {indicator} </div>}                
            <div className='navTitle'>
                <b>Brent Gustafson</b>
            </div>
            
            <div className='navSubtitle'>
                <firstChar>W</firstChar>eb Developer | <firstChar>R</firstChar>eact | 
                <firstChar>E</firstChar>xpress | <firstChar>M</firstChar>ongodb
            </div>
            <div className='navLinks'>
                <ul>
                    <Link to={ '/' }>
                        <li >   
                            <div className='link'>HOME</div>
                        </li>
                    </Link>
                    <Link to={ '/Portfolio' }>
                        <li>
                            <div className='link'>PORTFOLIO</div>
                        </li>
                    </Link>
                    <Link to={ '/About' }>
                        <li>
                            <div className='link'>ABOUT</div>
                        </li>
                    </Link>
                    <Link to={ '/Contact' }>
                        <li>
                            <div className='link'>CONTACT</div>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar