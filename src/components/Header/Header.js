import { Nav } from '../Nav/Nav'
import './Header.scss'

export function Header () {
    return (
        <div className='header'>
            <h1>Empuxo</h1>
            <Nav />
        </div>
    )
}