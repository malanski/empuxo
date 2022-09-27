import '../track.scss'
import camarao from '../../../assets/camarao.jpg'
import { Link } from 'react-router-dom'
import camaraoLetra from '../../../assets/camaraoLetra.png'
import camaraoAudio from '../../../assets/audio/camarao.mp3'
import { Icon } from '@mui/material'

export function Camarao() {
    return (
        <div className='tracks'>
            <h2>09# Camarão</h2>
            
            <audio className='tracks-player' controls>
                <source src={camaraoAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
            <div className='tracks-navigation'>
                <Link to="/tracks/soAmetade">
                    <p>Anterior</p>
                    <Icon>
                        <span class="material-icons-outlined">
                            fast_rewind
                        </span>
                    </Icon>
                </Link>
                <Link to="/tracks/casulo">
                    <p>Proxima</p>
                    <Icon>
                        <span class="material-icons-outlined">
                            fast_forward
                        </span>
                    </Icon>
                </Link>
            </div>

            <div className='image-container'>
                <img src={camaraoLetra} alt="Album cover" />
                <img src={camarao} alt="Album cover" />
            </div>
        </div>
    )
}