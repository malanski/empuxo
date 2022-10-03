import { Icon } from '@mui/material'
import './Footer.scss'
import GitHubIcon from '@mui/icons-material/GitHub';

export function Footer() {
    return (
        <div className='footer'>
            <hr />
            <ul>
                <li>
                    <a className="footer-links"
                        href="https://www.youtube.com/channel/UCMO8be295Zay2OajfewJpMA"
                        target="_blank" rel="noreferrer"
                        title='Canal no Youtube'>
                        <Icon>
                            <span className="material-icons-outlined">
                                smart_display
                            </span>
                        </Icon>
                        <span>YouTube</span>
                    </a>
                </li>

                <li>
                    <a className="footer-links"
                        href="https://soundcloud.com/pao-e-circo"
                        target="_blank" rel="noreferrer"
                        title='Pão e circo + Empuxo'>
                        <Icon>
                            <span className="material-icons-outlined">
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
                <p>Desenvolvido por Ulisses Malanski Copyrights ₢ - 2022</p>
                <br />
                    <a href="https://github.com/malanski" alt='github profile'
                        target='_blank'
                        rel="noreferrer"
                        title='my web development projects'>
                        <GitHubIcon />
                    </a>
            </div>

        </div>
    )
}