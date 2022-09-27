import '../track.scss'
import marmota from '../../../assets/marmota.jpg'
import { Link } from 'react-router-dom'
import Player from '../../../components/Player/Player'
import marmotaLetra from '../../../assets/marmotaLetra.png'
import marmotaAudio from '../../../assets/audio/marmota.mp3'
import Icon from '@mui/material/Icon'

export function Marmota() {
    return (
        <div className='tracks'>
            <h2>01# Marmota</h2>

            <audio className='tracks-player' controls>
                <source src={marmotaAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
            <div className='tracks-navigation'>
                <div></div>
                <Link to="/tracks/cabreiragem">
                    <p>Proxima</p>
                    <Icon>
                        <span class="material-icons-outlined">
                            fast_forward
                        </span>
                    </Icon>
                </Link>
            </div>

            {/* <Player /> */}

            <div className='image-container'>
                <img src={marmotaLetra} alt="Album cover" />
                <img src={marmota} alt="Album cover" />
            </div>
        </div>
    )
}