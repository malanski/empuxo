import './Footer.scss'


export function Footer () {
    return (
        <div className='footer'>
            <ul>
                <li>
                    <a href="https://www.youtube.com/channel/UCMO8be295Zay2OajfewJpMA"
                        target='_blank'
                        rel="noreferrer"
                        title='Canal no Youtube'>
                        YouTube
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
                        title='Pão e circo + Empuxo'>
                    Sound Cloud
                    </a>
                </li>
            </ul>
            
        </div>
    )
}