import { Icon } from '@mui/material'
import './Footer.scss'


export function Footer() {
    return (
        <div className='footer'>
            <hr />
            <ul>
                <li>
                    <a href="https://www.youtube.com/channel/UCMO8be295Zay2OajfewJpMA"
                        target='_blank'
                        rel="noreferrer"
                        title='Canal no Youtube'
                        className="footer-links">

                        <Icon>
                            <span class="material-icons-outlined">
                                smart_display
                            </span>
                        </Icon>
                        <span>YouTube</span>
                    </a>
                </li>

                {/* <li>
                    <a href="#"
                    target='_blank'
                    rel="noreferrer"
                    title='em construção'>
                    Instagram
                </a>
                </li> */}
                <li>
                    <a href="https://soundcloud.com/pao-e-circo"
                        target='_blank'
                        rel="noreferrer"
                        title='Pão e circo + Empuxo'
                        className="footer-links">

                        <Icon>
                            <span class="material-icons-outlined">
                                cloud
                            </span>
                        </Icon>
                        <span>Sound Cloud</span>
                    </a>
                </li>
            </ul>
            <br />
            <br />
            <br />
            <div>
                <p>Copyrights ₢ - Ulisses Malanski - 2021</p>
                <p>Desenvolvido por Ulisses Malanski - 2022</p>
            </div>

        </div>
    )
}