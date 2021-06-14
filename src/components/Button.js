import { Link } from 'react-router-dom'
import '../styles/Button.scss'

function Button ({ buttonText, buttonLink }) {
    return (
        <div className="frame">
            <Link className='custom-btn btn-1' to={{ pathname:  buttonLink }} target='_blank'>
                <span>{ buttonText }</span>
            </Link>
        </div>
    )
}

export default Button