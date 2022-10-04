import { Nav } from '../Nav/Nav'
import { PlayerHeader } from '../PlayerHeader/PlayerHeader'
import './Header.scss'
import tracks from "../PlayerHeader/tracks";


export function Header () {
    return (
        <div className='header'>
            <h1 title='Ulisses Malanski Music 2021'>Empuxo</h1>
            <PlayerHeader  tracks={tracks} />
            <Nav />
        </div>
    )
}