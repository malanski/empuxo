import '../track.scss'
import ditadoPopular from '../../../assets/ditadoPopular.png'
import { Link } from 'react-router-dom'
import ditadoPopularLetra from '../../../assets/ditadoPopularLetra.png'
import ditadoPopularAudio from '../../../assets/audio/ditadoPopular.mp3'
import { Icon } from '@mui/material'

export function DitadoPopular() {
    return (
        <div className='tracks'>
            <h2>07# Ditado Popular</h2>

            <audio className='tracks-player' controls>
                <source src={ditadoPopularAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
            <div className='tracks-navigation'>

                <Link to="/tracks/hidra">
                    <p>Anterior</p>
                    <Icon>
                        <span class="material-icons-outlined">
                            fast_rewind
                        </span>
                    </Icon>
                </Link>
                <Link to="/tracks/soAmetade">
                    <p>Proxima</p>
                    <Icon>
                        <span class="material-icons-outlined">
                            fast_forward
                        </span>
                    </Icon>
                </Link>
            </div>

            <div className='image-container'>
                <img src={ditadoPopularLetra} alt="Album cover" />
                <img src={ditadoPopular} alt="Album cover" />
            </div>
        </div>
    )
}