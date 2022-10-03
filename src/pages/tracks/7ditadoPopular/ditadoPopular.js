import '../track.scss'
import ditadoPopular from '../../../assets/ditadoPopular.png'
import { Link } from 'react-router-dom'
import ditadoPopularLetra from '../../../assets/ditadoPopularLetra.png'
import ditadoPopularAudio from '../../../assets/audio/ditadoPopular.mp3'
import { Icon } from '@mui/material'
import ReactAudioPlayer from 'react-audio-player'

export function DitadoPopular() {
    return (
        <div className='tracks'>

            <ReactAudioPlayer
                src={ditadoPopularAudio}
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
                <source src={ditadoPopularAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio> */}
            <div className='tracks-navigation'>

                <Link to="/tracks/hidra">
                    <p>Anterior</p>
                    <Icon>
                        <span className="material-icons-outlined">
                            fast_rewind
                        </span>
                    </Icon>
                </Link>

                <h2>07# Ditado Popular</h2>

                <Link to="/tracks/soAmetade">
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
                        src={ditadoPopularLetra}
                        alt="Album cover lyrics" />
                    <img
                        className='illustration'
                        src={ditadoPopular}
                        alt="Track illustration" />
                </div>
            </details>

        </div>
    )
}