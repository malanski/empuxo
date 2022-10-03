import '../track.scss'
import marmota from '../../../assets/marmota.jpg'
import { Link } from 'react-router-dom'
// import Player from '../../../components/Player/Player'
import marmotaLetra from '../../../assets/marmotaLetra.png'
import marmotaAudio from '../../../assets/audio/marmota.mp3'
import Icon from '@mui/material/Icon'
import ReactAudioPlayer from "react-audio-player";



export function Marmota() {
    return (
        <div className='tracks'>

            <ReactAudioPlayer
                src={marmotaAudio}
                style={{
                    width: '90%',
                    height: '80px',

                    backgroundColor: 'black',
                    borderRadius: '20px 20px 0 0',
                    padding: '5px',
                    marginTop: '10px',
                    marginBottom: '0',
                }}

                controls
                controlsList='nodownload'
            />

            {/* <details name="player">
                <audio className='tracks-player'
                    controls
                    controlsList='nodownload'>
                    <source src={marmotaAudio}
                        preload='metadata'
                        // onEmptied
                        type="audio/mpeg" />
                    Sorry, your browser does not support the audio tag.
                </audio>
            </details> */}

            <div className='tracks-navigation'>
                <div></div>

                <h2>01# Marmota</h2>

                <Link to="/tracks/cabreiragem">
                    <p>Proxima</p>
                    <Icon>
                        <span className="material-icons-outlined">
                            fast_forward
                        </span>
                    </Icon>
                </Link>
            </div>

            {/* <Player /> */}

            <details className='detalhes'>
                <summary className='detalhesName'>Letras</summary>
                <div className='image-container'>
                    <img
                        className='lyrics'
                        src={marmotaLetra}
                        alt="Album cover lyrics" />
                    <img
                        className='illustration'
                        src={marmota}
                        alt="Track illustration" />


                </div>
            </details>

        </div>
    )
}