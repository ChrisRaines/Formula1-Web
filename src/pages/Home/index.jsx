import '../../global.css'
import pilotos from '../../img/pilotos.png'
import './style.css'

export default function Home(){
    return (
        <>
        <section className="container-home">

        <div className="mascara"></div>

        <img src={pilotos} alt="foto dos pilotos" />

        </section>
        </>
    );
}