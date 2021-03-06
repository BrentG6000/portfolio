import { useContext } from 'react'
import { Link } from 'react-router-dom'
import DarkModeProvider from '../contexts/DarkModeContext'
import twitterLogo from '../TwitterLogo.png'
import darkTwitterLogo from '../DarkTwitterLogo.png'
import githubLogo from '../GithubLogo.png'
import darkGithubLogo from '../DarkGithubLogo.png'
import linkedInLogo from '../LinkedinLogo.png'
import darkLinkedInLogo from '../DarkLinkedinLogo.png'
import '../styles/Footer.scss'

function Footer() {
    const [darkMode] = useContext(DarkModeProvider.context)

    return (
        <div className='footer' id={ darkMode ? 'dark' : ''}>
            <div>
                <Link to={ '/Contact' }>
                    <div className='contact'>CONTACT</div>
                </Link> 
            </div>
            <div className='footerIcons'>
                <a href='https://twitter.com/BrentG6000'>
                { darkMode ? <img src={ darkTwitterLogo } alt=''></img>: <img src={ twitterLogo } alt=''></img> }
                </a>
                <a href='https://github.com/BrentG6000'>
                { darkMode ? <img src={ darkGithubLogo } alt=''></img>: <img src={ githubLogo } alt=''></img> } 
                </a>
                <a href='https://www.linkedin.com/in/brent-gustafson-166170a8/'>
                { darkMode ? <img src={ darkLinkedInLogo } alt=''></img>: <img src={ linkedInLogo } alt=''></img> }   
                </a>
            </div>
            <div className='footerText'>This site was created using ReactJS</div>
        </div>
    )
}

export default Footer