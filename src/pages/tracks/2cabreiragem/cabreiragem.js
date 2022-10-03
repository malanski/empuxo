import '../track.scss'
import cabreiragem from '../../../assets/cabreiragem.jpg'
import cabreiragemLetra from '../../../assets/cabreiragemLetra.png'
import cabreiragemAudio from '../../../assets/audio/cabreiragem.mp3'
import { Link } from 'react-router-dom'
import { Icon } from '@mui/material'
import ReactAudioPlayer from 'react-audio-player'

export function Cabreiragem() {
    return (
        <div className='tracks'>

            <ReactAudioPlayer
                src={cabreiragemAudio}
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
                <source src={cabreiragemAudio} preload='none' type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio> */}

            <div className='tracks-navigation'>

                <Link to="/tracks/marmota">
                    <p>Anterior</p>
                    <Icon>
                        <span className="material-icons-outlined">
                            fast_rewind
                        </span>
                    </Icon>
                </Link>

                <h2>02# Cabreiragem</h2>

                <Link to="/tracks/ondePossoTeVer">
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
                    src={cabreiragemLetra}
                    alt="Album cover lyrics" />
                <img
                    className='illustration'
                    src={cabreiragem}
                    alt="Track illustration" />
            </div>
        </div>
    )
}