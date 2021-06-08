import { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DarkModeProvider from '../contexts/DarkModeContext'
import '../styles/Box.scss'

function Home () {
    const [darkMode, setDarkMode] = useContext(DarkModeProvider.context)
    const text = <p>Here you can learn more about me and see some of my web development ability.
        Feel free to look at my portfolio, about, or contact pages. I am excited to share my work
    with you.
    </p>

    return (
        <div className='homeWrapper'>
        <Navbar/>
        <page className='homePage' id={ darkMode ? 'pageDark' : '' }>
                <div className="homeBox"></div>
                <h1>Welcome</h1>
                {text}
        </page>
        <Footer/>
        </div>
    )
}

export default Home