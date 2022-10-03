import '../track.scss'
import aphantasia from '../../../assets/aphantasia.jpg'
import { Link } from 'react-router-dom'
import aphantasiaLetra from '../../../assets/aphantasiaLetra.png'
import aphantasiaAudio from '../../../assets/audio/aphantasia.mp3'
import { Icon } from '@mui/material'
import ReactAudioPlayer from 'react-audio-player'

export function Aphantasia() {
    return (
        <div className='tracks'>
            
            <ReactAudioPlayer
                src={aphantasiaAudio}
                style={{
                    width: '90%',
                    height: '80px',

                    backgroundColor: 'black',
                    borderRadius: '20px 20px 0 0',
                    padding: '5px',
                    marginTop: '10px',
                    marginBottom: '0',
                }}
                preload='metadata'
                controlsList='nodownload'
                controls
            />

            {/* <audio className='tracks-player' controls>
                <source src={aphantasiaAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio> */}

            <div className='tracks-navigation'>
                <Link to="/tracks/qualeh">
                    <p>Anterior</p>
                    <Icon>
                        <span className="material-icons-outlined">
                            fast_rewind
                        </span>
                    </Icon>
                </Link>

                <h2>12# Aphantasia</h2>
                
                <Link to="/tracks/anoPassado">
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
                        src={aphantasiaLetra}
                        alt="Album cover lyrics" />
                    <img
                        className='illustration'
                        src={aphantasia}
                        alt="Track illustration" />
                </div>
            </details>
        </div>
    )
}