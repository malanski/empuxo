import './home.scss'
import cover from '../../assets/albumCover.jpg'

export function Home () {
    return (
        <div className='home'>
            <h2>Sonoluminescência</h2>

            <div className='image-container'>
                <img src={cover} alt="Album cover"/>
            </div>
        </div>
    )
}