import '../track.scss'
import camaleao from '../../../assets/camaleao.jpg'
import camaleaoLetra from '../../../assets/camaleaoLetra.png'
import camaleaoAudio from '../../../assets/audio/camaleao.mp3'

import { Link } from 'react-router-dom'

export function Camaleao() {
    return (
        <div className='tracks'>
            <h2>04# Camaleão</h2>
            
            <audio className='tracks-player' controls>
                <source src={camaleaoAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>

            <div className='tracks-navigation'>

                <Link to="/tracks/ondePossoTeVer">
                    <p>Anterior</p>
                </Link>
                <Link to="/tracks/viajante">
                    <p>Proxima</p>
                </Link>
            </div>

            <div className='image-container'>
                <img src={camaleaoLetra} alt="Album cover" />
                <img src={camaleao} alt="Album cover" />
            </div>
        </div>
    )
}