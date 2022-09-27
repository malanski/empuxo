import '../track.scss'
import soAmetade from '../../../assets/soAmetade.jpg'
import { Link } from 'react-router-dom'
import soAmetadeLetra from '../../../assets/soAmetadeLetra.png'
import soAmetadeAudio from '../../../assets/audio/soAmetade.mp3'
import { Icon } from '@mui/material'

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
                    <Icon>
                        <span class="material-icons-outlined">
                            fast_rewind
                        </span>
                    </Icon>
                </Link>
                <Link to="/tracks/camarao">
                    <p>Proxima</p>
                    <Icon>
                        <span class="material-icons-outlined">
                            fast_forward
                        </span>
                    </Icon>
                </Link>
            </div>

            <div className='image-container'>
                <img src={soAmetadeLetra} alt="Album cover" />
                <img src={soAmetade} alt="Album cover" />
            </div>
        </div>
    )
}