import { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DarkModeProvider from '../contexts/DarkModeContext'
import selfie from '../bg-0024.jpg'
import '../styles/Box.scss'

function About () {
    const [darkMode, setDarkMode] = useContext(DarkModeProvider.context)
    const text = <div className='aboutText'><h1>About Me</h1><p>
    </p></div>

    return (
        <div className='aboutWrapper'>
        <Navbar/>
        <page className='aboutPage' id={ darkMode ? 'pageDark' : '' }>
            <div className="aboutBox"></div>
            <img className="selfie" src={ selfie }/>
            { text }
        </page>
        <Footer/>
        </div>
    )
}

export default About