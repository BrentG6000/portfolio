import { useContext } from 'react'
import { Link } from 'react-router-dom'
import DarkModeProvider from '../contexts/DarkModeContext'
import '../styles/Button.scss'

function Button ({ buttonText, buttonLink }) {
    const [darkMode, setDarkMode] = useContext(DarkModeProvider.context)
    

    return (
        <div className="frame">
            <Link className='custom-btn btn-1' to={{ pathname:  buttonLink }} target='_blank'>
                <span>{ buttonText }</span>
            </Link>
        </div>
    )
}

export default Button