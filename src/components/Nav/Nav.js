import { Link } from 'react-router-dom'
import './Nav.scss'

export function Nav() {
    return (
        <div className='nav'>
            <ul>
                <Link to="/home">
                    <li>Capa</li>
                </Link>
                <Link to="/tracks/">
                    <li>Todas as Faixas</li>
                </Link>
                <Link to="/about">
                    <li>Sobre</li>
                </Link>
            </ul>
        </div>
    )
}