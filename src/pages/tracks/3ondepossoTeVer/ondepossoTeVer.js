import '../track.scss'
import ondePossoTeVer from '../../../assets/ondePossoTeVer.jpg'
import ondePossoTeVerLetra from '../../../assets/ondePossoTeVerLetra.png'
import ondePossoTeVerAudio from '../../../assets/audio/ondePossoTeVer.mp3'
import { Link } from 'react-router-dom'
import { Icon } from '@mui/material'

export function OndePossoTeVer() {
    return (
        <div className='tracks'>

            <audio className='tracks-player' controls>
                <source src={ondePossoTeVerAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>

            <div className='tracks-navigation'>
                <Link to="/tracks/cabreiragem">
                    <p>Anterior</p>
                    <Icon>
                        <span class="material-icons-outlined">
                            fast_rewind
                        </span>
                    </Icon>
                </Link>

                <h2>03# Onde Posso Te Ver</h2>

                <Link to="/tracks/camaleao">
                    <p>Proxima</p>
                    <Icon>
                        <span class="material-icons-outlined">
                            fast_forward
                        </span>
                    </Icon>
                </Link>
            </div>

            <div className='image-container'>
                <img 
                    className='lyrics'
                    src={ondePossoTeVerLetra}
                    alt="Album cover lyrics" />
                <img 
                    className='illustration'
                    src={ondePossoTeVer}
                    alt="Track illustration" />
            </div>
        </div>
    )
}