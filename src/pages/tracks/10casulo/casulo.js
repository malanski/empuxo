import '../track.scss'
import casulo from '../../../assets/casulo.jpg'
import { Link } from 'react-router-dom'
import casuloLetra from '../../../assets/casuloLetra.png'
import casuloAudio from '../../../assets/audio/casulo.mp3'
import { Icon } from '@mui/material'
import ReactAudioPlayer from 'react-audio-player'

export function Casulo() {
    return (
        <div className='tracks'>

            <ReactAudioPlayer
                src={casuloAudio}
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
                <source src={casuloAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio> */}
            <div className='tracks-navigation'>

                <Link to="/tracks/camarao">
                    <p>Anterior</p>
                    <Icon>
                        <span className="material-icons-outlined">
                            fast_rewind
                        </span>
                    </Icon>
                </Link>

                <h2>10# Casulo</h2>

                <Link to="/tracks/qualeh">
                    <p>Proxima</p>
                    <Icon>
                        <span className="material-icons-outlined">
                            fast_forward
                        </span>
                    </Icon>
                </Link>
            </div>
            
            <details className='detalhes'>
                <summary className='detalhesName'>Letras</summary>
                <div className='image-container'>
                    <img
                        className='lyrics'
                        src={casuloLetra}
                        alt="Album cover lyrics" />
                    <img
                        className='illustration'
                        src={casulo}
                        alt="Track illustration" />
                </div>
            </details>

        </div>

    )
}