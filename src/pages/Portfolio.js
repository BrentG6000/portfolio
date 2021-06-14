import { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DarkModeProvider from '../contexts/DarkModeContext'
import Buttton from '../components/Button'
import ProjectPicture from '../TwitterProject.png'
import '../styles/Box.scss'

function Portfolio () {
    const [darkMode] = useContext(DarkModeProvider.context)
    const text = <p>This is a full stack web app that interacts with the Twitter
        API to allow the user to search through their Twitter profile information.
        It also allows you to tweet out messages without using the Twitter website
        or app. This project uses a ReactJS frontend and an Express server on the
        backend. Click the link below to test it out for yourself!</p>
    
    return (
        <div className='portWrapper'>
            <Navbar/>
            <page className='portPage' id={ darkMode ? 'pageDark' : '' }>
                <div className="portBox"></div>
                <h1>Twitter Profile Searcher</h1>   
                <img className="project" src={ProjectPicture} alt=''/>
                {text}
                <Buttton buttonText='Go to site' buttonLink='https://brentg123-twitter-project.herokuapp.com/' />
            </page>
            <Footer/>
        </div>
    )
}

export default Portfolio