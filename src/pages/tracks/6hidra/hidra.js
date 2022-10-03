import '../track.scss'
import hidra from '../../../assets/hidra.jpg'
import { Link } from 'react-router-dom'
import hidraLetra from '../../../assets/hidraLetra.png'
import hidraAudio from '../../../assets/audio/hidra.mp3'
import { Icon } from '@mui/material'
import ReactAudioPlayer from 'react-audio-player'

export function Hidra() {
    return (
        <div className='tracks'>

            <ReactAudioPlayer
                src={hidraAudio}
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
                <source src={hidraAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio> */}
            <div className='tracks-navigation'>

                <Link to="/tracks/viajante">
                    <p>Anterior</p>

                    <Icon>
                        <span className="material-icons-outlined">
                            fast_rewind
                        </span>
                    </Icon>
                </Link>
                
                <h2>06# Hidra</h2>

                <Link to="/tracks/ditadoPopular">
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
                    src={hidraLetra}
                    alt="Album cover lyrics" />
                <img 
                    className='illustration'
                    src={hidra}
                    alt="Track illustration" />
            </div>
        </div>
    )
}