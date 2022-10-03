import '../track.scss'
import viajante from '../../../assets/viajante.png'
import viajanteLetra from '../../../assets/viajanteLetra.png'
import viajanteAudio from '../../../assets/audio/viajante.mp3'
import { Link } from 'react-router-dom'
import { Icon } from '@mui/material'
import ReactAudioPlayer from 'react-audio-player'

export function Viajante() {
    return (
        <div className='tracks'>

            <ReactAudioPlayer
                src={viajanteAudio}
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
                <source src={viajanteAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio> */}

            <div className='tracks-navigation'>

                <Link to="/tracks/camaleao">
                    <p>Anterior</p>
                    <Icon>
                        <span className="material-icons-outlined">
                            fast_rewind
                        </span>
                    </Icon>
                </Link>
                
                <h2>05# Viajante</h2>

                <Link to="/tracks/hidra">
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
                    src={viajanteLetra}
                    alt="Album cover lyrics" />
                <img 
                    className='illustration'
                    src={viajante}
                    alt="Track illustration" />
            </div>
        </div>
    )
}