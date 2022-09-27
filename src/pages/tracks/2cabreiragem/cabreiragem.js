import '../track.scss'
import cabreiragem from '../../../assets/cabreiragem.jpg'
import cabreiragemLetra from '../../../assets/cabreiragemLetra.png'
import cabreiragemAudio from '../../../assets/audio/cabreiragem.mp3'
import { Link } from 'react-router-dom'

export function Cabreiragem() {
    return (
        <div className='tracks'>
            <h2>02# Cabreiragem</h2>


            <audio className='tracks-player' controls>
                <source src={cabreiragemAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>

            <div className='tracks-navigation'>

                <Link to="/tracks/marmota">
                    <p>Anterior</p>
                </Link>
                <Link to="/tracks/ondePossoTeVer">
                    <p>Proxima</p>
                </Link>
            </div>



            <div className='image-container'>
                <img src={cabreiragemLetra} alt="Album cover" />

                <img src={cabreiragem} alt="Album cover" />
            </div>
        </div>
    )
}