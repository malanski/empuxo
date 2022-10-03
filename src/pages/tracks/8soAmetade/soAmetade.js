import '../track.scss'
import soAmetade from '../../../assets/soAmetade.jpg'
import { Link } from 'react-router-dom'
import soAmetadeLetra from '../../../assets/soAmetadeLetra.png'
import soAmetadeAudio from '../../../assets/audio/soAmetade.mp3'
import { Icon } from '@mui/material'
import ReactAudioPlayer from 'react-audio-player'

export function SoAmetade() {
    return (
        <div className='tracks'>
            
            
            <ReactAudioPlayer
                src={soAmetadeAudio}
                style={{
                    width: '90%',
                    backgroundColor: 'black',
                    borderRadius: '20px 20px 0 0',
                    padding: '5px',
                    marginTop: '10px'
                }}
                controls
            />
            {/* <audio className='tracks-player' controls>
                <source src={soAmetadeAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio> */}
            <div className='tracks-navigation'>

                <Link to="/tracks/ditadoPopular">
                    <p>Anterior</p>
                    <Icon>
                        <span className="material-icons-outlined">
                            fast_rewind
                        </span>
                    </Icon>
                </Link>

                <h2>08# Só a Metade</h2>


                <Link to="/tracks/camarao">
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
                    src={soAmetadeLetra}
                    alt="Album cover lyrics" />
                <img 
                    className='illustration'
                    src={soAmetade}
                    alt="Track illustration" />
            </div>
        </div>
    )
}