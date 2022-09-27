import '../track.scss'
import hidra from '../../../assets/hidra.jpg'
import { Link } from 'react-router-dom'
import hidraLetra from '../../../assets/hidraLetra.png'
import hidraAudio from '../../../assets/audio/hidra.mp3'

export function Hidra() {
    return (
        <div className='tracks'>
            <h2>06# Hidra</h2>

            <audio className='tracks-player' controls>
                <source src={hidraAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
            <div className='tracks-navigation'>

                <Link to="/tracks/viajante">
                    <p>Anterior</p>
                </Link>
                <Link to="/tracks/ditadoPopular">
                    <p>Proxima</p>
                </Link>
            </div>

            <div className='image-container'>
                <img src={hidraLetra} alt="Album cover" />
                <img src={hidra} alt="Album cover" />
            </div>
        </div>
    )
}