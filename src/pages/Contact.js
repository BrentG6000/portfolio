import { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DarkModeProvider from '../contexts/DarkModeContext'
import ContactForm from '../components/ContactForm'
import '../styles/Box.scss'

function Contact () {
    const [darkMode, setDarkMode] = useContext(DarkModeProvider.context)
    const text = <p>If you have any questions for me please fill in the contact form and
        I will respond to you as quickly as possible.
    </p>

    return (
        <div className='contactWrapper'>
        <Navbar/>
        <page className='contactPage' id={ darkMode ? 'pageDark' : '' }>
            <div className="contactBox"></div>
            {text}
            <ContactForm/>
        </page>
        <Footer/>
        </div>
        
    )
}

export default Contact