import '../track.scss'
import casulo from '../../../assets/casulo.jpg'
import { Link } from 'react-router-dom'
import casuloLetra from '../../../assets/casuloLetra.png'
import casuloAudio from '../../../assets/audio/casulo.mp3'

export function Casulo() {
    return (
        <div className='tracks'>
            <h2>10# Casulo</h2>
             
            <audio className='tracks-player' controls>
                <source src={casuloAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
            <div className='tracks-navigation'>

                <Link to="/tracks/camarao">
                    <p>Anterior</p>
                </Link>
                <Link to="/tracks/qualeh">
                    <p>Proxima</p>
                </Link>
            </div>

            <div className='image-container'>
                <img src={casuloLetra} alt="Album cover" />
                <img src={casulo} alt="Album cover" />
            </div>
        </div>
    )
}