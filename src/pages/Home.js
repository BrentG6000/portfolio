import { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DarkModeProvider from '../contexts/DarkModeContext'
import '../styles/Box.scss'

function Home () {
    const [darkMode] = useContext(DarkModeProvider.context)
    const text = <p>Hi, I'm Brent. Here you can learn more about me and see some of my web projects.
        Feel free to look at my portfolio and about pages to find out more about me and my work. If
        you have any questions for me, there is also a contact page. I am excited to share my work
        with you!</p>

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