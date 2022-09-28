import '../track.scss'
import camaleao from '../../../assets/camaleao.jpg'
import camaleaoLetra from '../../../assets/camaleaoLetra.png'
import camaleaoAudio from '../../../assets/audio/camaleao.mp3'

import { Link } from 'react-router-dom'
import { Icon } from '@mui/material'

export function Camaleao() {
    return (
        <div className='tracks'>
            
            <audio className='tracks-player' controls>
                <source src={camaleaoAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>

            <div className='tracks-navigation'>

                <Link to="/tracks/ondePossoTeVer">
                    <p>Anterior</p>
                    <Icon>
                        <span className="material-icons-outlined">
                            fast_rewind
                        </span>
                    </Icon>
                </Link>
                
                <h2>04# Camaleão</h2>

                <Link to="/tracks/viajante">
                    <p>Proxima</p>
                    <Icon>
                        <span className="material-icons-outlined">
                            fast_forward
                        </span>
                    </Icon>
                </Link>
            </div>

            <div className='image-container'>
                <img 
                    className='lyrics'
                    src={camaleaoLetra}
                    alt="Album cover lyrics" />
                <img 
                    className='illustration'
                    src={camaleao}
                    alt="Track illustration" />
            </div>
        </div>
    )
}