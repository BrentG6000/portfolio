import { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DarkModeProvider from '../contexts/DarkModeContext'
import selfie from '../bg-0024.jpg'
import '../styles/Box.scss'
import '../App.scss'

function About () {
    const [darkMode] = useContext(DarkModeProvider.context)
    const text = <div className='aboutText'><h1>About Me</h1><p>
    I am a Univeristy of Minnesota student currently in the process of completing
    a B. A. in computer science. I have knowledge of Javascript, Node.js, the React
    and Express frameworks, and MongoDB. I have a strong passion for web development
    and that is where my focus is now. My time at University has taught me the
    fundamentals of programming including data structures, algorithms, and discrete
    math. I have used Java, C, and C++ extensively during my courses.</p></div>

    return (
        <div className='aboutWrapper'>
            <Navbar/>
            <page className='aboutPage' id={ darkMode ? 'pageDark' : '' }>
                <div className="aboutBox"></div>
                <img className="selfie" src={ selfie } alt=''/>
                { text }
            </page>
            <Footer/>
        </div>
    )
}

export default About