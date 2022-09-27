import '../track.scss'
import anoPassado from '../../../assets/anoPassado.jpg'
import { Link } from 'react-router-dom'
import anoPassadoLetra from '../../../assets/anoPassadoLetra.png'
import anoPassadoAudio from '../../../assets/audio/anoPassado.mp3'
import { Icon } from '@mui/material'

export function AnoPassado () {
    return (
        <div className='tracks'>
            <h2>13# Ano Passado</h2>

            <audio className='tracks-player' controls>
                <source src={anoPassadoAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>

            <div className='tracks-navigation'>

                <Link to="/tracks/aphantasia">
                    <p>Anterior</p>
                    <Icon>
                        <span class="material-icons-outlined">
                            fast_rewind
                        </span>
                    </Icon>
                </Link>

                <div></div>

            </div>

            <div className='image-container'>
                <img src={anoPassadoLetra} alt="Album cover"/>
                <img src={anoPassado} alt="Album cover"/>
            </div>
        </div>
    )
}