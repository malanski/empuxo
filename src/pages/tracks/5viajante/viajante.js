import '../track.scss'
import viajante from '../../../assets/viajante.png'
import viajanteLetra from '../../../assets/viajanteLetra.png'
import viajanteAudio from '../../../assets/audio/viajante.mp3'
import { Link } from 'react-router-dom'

export function Viajante() {
    return (
        <div className='tracks'>
            <h2>05# Viajante</h2>

            <audio className='tracks-player' controls>
                <source src={viajanteAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
            <div className='tracks-navigation'>

                <Link to="/tracks/camaleao">
                    <p>Anterior</p>
                </Link>
                <Link to="/tracks/hidra">
                    <p>Proxima</p>
                </Link>
            </div>

            <div className='image-container'>
                <img src={viajanteLetra} alt="Album cover" />
                <img src={viajante} alt="Album cover" />
            </div>
        </div>
    )
}