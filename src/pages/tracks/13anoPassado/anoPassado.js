import '../track.scss'
import anoPassado from '../../../assets/anoPassado.jpg'
import { Link } from 'react-router-dom'
import anoPassadoLetra from '../../../assets/anoPassadoLetra.png'
import anoPassadoAudio from '../../../assets/audio/anoPassado.mp3'
import { Icon } from '@mui/material'

export function AnoPassado () {
    return (
        <div className='tracks'>
           

            <audio className='tracks-player' controls>
                <source src={anoPassadoAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>

            <div className='tracks-navigation'>

                <Link to="/tracks/aphantasia">
                    <p>Anterior</p>
                    <Icon>
                        <span className="material-icons-outlined">
                            fast_rewind
                        </span>
                    </Icon>
                </Link>
                
                <h2>13# Ano Passado</h2>

                <div></div>

            </div>

            <div className='image-container'>
                <img 
                    className='lyrics'
                    src={anoPassadoLetra}
                    alt="Album cover lyrics" />
                <img 
                    className='illustration'
                    src={anoPassado}
                    alt="Track illustration" />
            </div>
        </div>
    )
}