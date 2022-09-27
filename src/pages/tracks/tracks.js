import { Link } from "react-router-dom";
import verse from '../../assets/verse.jpg'
import './track-list.scss'

export function Tracks() {
    return (
        <div className='track-list'>
            <div className="album-back-container">
                <img className="album-back" src={verse} alt="Album back" />
                <div className="album-track-list">
                    <h2>Sonoluminescência</h2>
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