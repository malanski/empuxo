import '../track.scss'
import aphantasia from '../../../assets/aphantasia.jpg'
import { Link } from 'react-router-dom'
import aphantasiaLetra from '../../../assets/aphantasiaLetra.png'
import aphantasiaAudio from '../../../assets/audio/aphantasia.mp3'

export function Aphantasia() {
    return (
        <div className='tracks'>
            <h2>12# Qual é</h2>
                                     
            <audio className='tracks-player' controls>
                <source src={aphantasiaAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
            <div className='tracks-navigation'>
                <Link to="/tracks/qualeh">
                    <p>Anterior</p>
                </Link>
                <Link to="/tracks/anoPassado">
                    <p>Proxima</p>
                </Link>
            </div>

            <div className='image-container'>
                <img src={aphantasiaLetra} alt="Album cover" />
                <img src={aphantasia} alt="Album cover" />
            </div>
        </div>
    )
}