import './about.scss'
import poster from '../../assets/poster.jpg'
export function About() {
    return (
        <div className='about'>
            <div className="album-back-container">
                <div className="about-text">
                    <div className='credits'>
                        <div className='credits-column'>
                            <p>
                                <span className='credits-title'>Empuxo</span><br />
                                é <br />
                                Ulisses Malanski,
                            </p>
                            <p>
                                outrora conhecido como Pão e Circo,<br />
                                banda de um homem só.
                            </p>
                            <br />
                            <p>
                                Produção, música e letra, guitarra, voz, baixo,<br />
                                mixagem, edição, arte visual e web design.
                            </p>
                            <br />
                            <p>
                                Microfone e orientação técnica,<br />
                                Diego RDMG.
                            </p>
                            <br />
                            <p>
                                BrainStorming e Consultoria,<br />
                                Pedro BR e Cristiane.
                            </p>
                            <br />
                            <p>
                                Produção 100%,<br />
                                Independente.<br />
                                Made in Brazil
                                Curitiba - Paraná - 2021
                            </p>
                        </div>

                        <div className='credits-column'>
                            <p>
                                <span className='credits-title'>
                                    Agradecimentos
                                </span>
                                <br />
                                <br />
                                André Barroso, Camila, Cris, Diego RDMG,<br />
                                
                            </p>
                            <p>
                                Dito-tatane, Gabi, Guto, Iara, Lulu, Jhony Dentadura<br />
                            </p>
                            <br />
                            <p>
                                Joana D'arc, montanha, pai e mãe, Pedro BR<br />
                            </p>
                            <br />
                            <p>
                                Ravi, Talita Yamae, Leandro Canhoto, Walker<br />
                            </p>
                            <br />
                            <p>
                                e todos aqueles que fazemparte da minha vida.
                            </p>
                            <br />
                            <p>
                                Obrigado por ouvir.<br />
                                Thank you for listening.
                            </p>
                            
                        </div>
                    </div>
                </div>

            </div>

                <img  className="album-poster"
                    src={poster}
                    alt="Empuxo poster"></img>
        </div>
    )
}