import '../track.scss'
import qualeh from '../../../assets/qualeh.png'
import { Link } from 'react-router-dom'
import qualehLetra from '../../../assets/qualehLetra.png'
import qualehAudio from '../../../assets/audio/qualeh.mp3'
import { Icon } from '@mui/material'
import ReactAudioPlayer from 'react-audio-player'

export function Qualeh() {
    return (
        <div className='tracks'>

            <ReactAudioPlayer
                src={qualehAudio}
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
                <source src={qualehAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio> */}
            <div className='tracks-navigation'>
                <Link to="/tracks/casulo">
                    <p>Anterior</p>
                    <Icon>
                        <span className="material-icons-outlined">
                            fast_rewind
                        </span>
                    </Icon>
                </Link>

                <h2>11# Qual é</h2>

                <Link to="/tracks/aphantasia">
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
                        src={qualehLetra}
                        alt="Album cover lyrics" />
                    <img
                        className='illustration'
                        src={qualeh}
                        alt="Track illustration" />
                </div>
            </details>

        </div>
    )
}