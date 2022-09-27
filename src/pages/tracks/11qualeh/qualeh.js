import '../track.scss'
import qualeh from '../../../assets/qualeh.png'
import { Link } from 'react-router-dom'
import qualehLetra from '../../../assets/qualehLetra.png'
import qualehAudio from '../../../assets/audio/qualeh.mp3'
import { Icon } from '@mui/material'

export function Qualeh() {
    return (
        <div className='tracks'>
            <h2>11# Qual é</h2>
                         
            <audio className='tracks-player' controls>
                <source src={qualehAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
            <div className='tracks-navigation'>
                <Link to="/tracks/casulo">
                    <p>Anterior</p>
                    <Icon>
                        <span class="material-icons-outlined">
                            fast_rewind
                        </span>
                    </Icon>
                </Link>
                <Link to="/tracks/aphantasia">
                    <p>Proxima</p>
                    <Icon>
                        <span class="material-icons-outlined">
                            fast_forward
                        </span>
                    </Icon>
                </Link>
            </div>
            <div className='image-container'>
                <img src={qualehLetra} alt="Album cover" />
                <img src={qualeh} alt="Album cover" />
            </div>
        </div>
    )
}