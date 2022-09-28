import { Link } from "react-router-dom";
import verse from '../../assets/verse.jpg'
import './track-list.scss'

// class TracksFiles {
//     constructor() {
//         this.trackName1= '../../../assets/marmota.mp3';
//         this.trackName2= '../../../assets/cabreiragem.mp3';
//         this.trackName3= '../../../assets/ondePossoTeVe.mp3';
//         this.trackName4= '../../../assets/camaleao.mp3';
//         this.trackName5= '../../../assets/viajante.mp3';
//         this.trackName6= '../../../assets/hidra.mp3';
//         this.trackName7= '../../../assets/ditadoPopular.mp3';
//         this.trackName8= '../../../assets/soAmetade.mp3';
//         this.trackName9= '../../../assets/camarao.mp3';
//         this.trackName10 = '../../../assets/casulo.mp3';
//         this.trackName11 = '../../../assets/qualeh.mp3';
//         this.trackName12 = '../../../assets/aphantasia.mp3';
//         this.trackName13 = '../../../assets/anoPassado.mp3';
//     }
    
// }

// const tracks = new TracksFiles()
// console.log(tracks.trackName1)

export function Tracks() {
    return (
        <div className='track-list'>
            <div className="album-back-container">
                <img className="album-back" src={verse} alt="Album back" />
                <div className="album-track-list">
                    <h2>Sonoluminescência</h2>

                    {/* <audio className='tracks-player' controls>
                        <source src={tracks.toString().trackName1} type="audio/mpeg" />
                        Sorry, your browser does not support the audio tag.
                    </audio> */}
                    
                    <ol>
                        <Link to="marmota" title='track page'>
                            <li>Marmota</li>
                        </Link>
                        <Link to="cabreiragem" title='track page'>
                            <li>Cabreiragem</li>
                        </Link>
                        <Link to="ondePossoTever" title='track page'>
                            <li>Onde Posso te Ver</li>
                        </Link>
                        <Link to="camaleao" title='track page'>
                            <li>Camaleão</li>
                        </Link>
                        <Link to="viajante" title='track page'>
                            <li>Viajante</li>
                        </Link>
                        <Link to="hidra" title='track page'>
                            <li>Hidra</li>
                        </Link>
                        <Link to="ditadoPopular" title='track page'>
                            <li>Ditado Popular</li>
                        </Link>
                        <Link to="soAmetade" title='track page'>
                            <li>Só a Metade</li>
                        </Link>
                        <Link to="camarao" title='track page'>
                            <li>Camarão</li>
                        </Link>
                        <Link to="casulo" title='track page'>
                            <li>Casulo</li>
                        </Link>
                        <Link to="qualeh" title='track page'>
                            <li>Qual é</li>
                        </Link>
                        <Link to="aphantasia" title='track page'>
                            <li>Aphantasia</li>
                        </Link>
                        <Link to="anoPassado" title='track page'>
                            <li>Ano Passado</li>
                        </Link>
                    </ol>
                </div>

            </div>


        </div>
    )
}