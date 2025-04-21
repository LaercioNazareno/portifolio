import '../style/componentes/Header.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="Logo" width="185" height="185" />
                <h1>Eng. Laercio Nazareno Neto</h1>
            </Link>
        </header>
    )
}

export default Header