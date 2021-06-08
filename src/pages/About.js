import { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DarkModeProvider from '../contexts/DarkModeContext'
import '../styles/Box.scss'

function About () {
    const [darkMode, setDarkMode] = useContext(DarkModeProvider.context)

    return (
        <div className='aboutWrapper'>
        <Navbar/>
        <page className='aboutPage' id={ darkMode ? 'pageDark' : '' }>
            <div className="aboutBox"></div>
        </page>
        <Footer/>
        </div>
    )
}

export default About