import '../track.scss'
import marmota from '../../../assets/marmota.jpg'
import { Link } from 'react-router-dom'
import Player from '../../../components/Player/Player'
import marmotaLetra from '../../../assets/marmotaLetra.png'
import marmotaAudio from '../../../assets/audio/marmota.mp3'

export function Marmota () {
    return (
        <div className='tracks'>
            <h2>01# Marmota</h2>
            
            <audio className='tracks-player' controls>
                <source src={marmotaAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>

            <Link to="/tracks/cabreiragem">
                <p>Proxima</p>
            </Link>
            {/* <Player /> */}
            <div className='image-container'>
                <img src={marmotaLetra} alt="Album cover"/>
                <img src={marmota} alt="Album cover"/>
            </div>
        </div>
    )
}