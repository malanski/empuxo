import '../track.scss'
import ondePossoTeVer from '../../../assets/ondePossoTeVer.jpg'
import ondePossoTeVerLetra from '../../../assets/ondePossoTeVerLetra.png'
import ondePossoTeVerAudio from '../../../assets/audio/ondePossoTeVer.mp3'
import { Link } from 'react-router-dom'

export function OndePossoTeVer() {
    return (
        <div className='tracks'>
            <h2>03# Onde Posso Te Ver</h2>

            <audio className='tracks-player' controls>
                <source src={ondePossoTeVerAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>

            <div className='tracks-navigation'>
                <Link to="/tracks/cabreiragem">
                    <p>Anterior</p>
                </Link>
                <Link to="/tracks/camaleao">
                    <p>Proxima</p>
                </Link>
            </div>

            <div className='image-container'>
                <img src={ondePossoTeVerLetra} alt="Album cover" />
                <img src={ondePossoTeVer} alt="Album cover" />
            </div>
        </div>
    )
}