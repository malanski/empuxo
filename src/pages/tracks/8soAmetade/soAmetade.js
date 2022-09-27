import '../track.scss'
import soAmetade from '../../../assets/soAmetade.jpg'
import { Link } from 'react-router-dom'
import soAmetadeLetra from '../../../assets/soAmetadeLetra.png'
import soAmetadeAudio from '../../../assets/audio/soAmetade.mp3'

export function SoAmetade() {
    return (
        <div className='tracks'>
            <h2>08# Só a Metade</h2>
            
            <audio className='tracks-player' controls>
                <source src={soAmetadeAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
            <div className='tracks-navigation'>

                <Link to="/tracks/ditadoPopular">
                    <p>Anterior</p>
                </Link>
                <Link to="/tracks/camarao">
                    <p>Proxima</p>
                </Link>
            </div>

            <div className='image-container'>
                <img src={soAmetadeLetra} alt="Album cover" />
                <img src={soAmetade} alt="Album cover" />
            </div>
        </div>
    )
}