import Header from '../../components/Header';
import '../../global.css'
import pilotos from '../../img/pilotos.png'
import './style.css'

export default function Home() {
    return (
        <>
            <Header />
            <section className="container-home">

                <div className="mascara"></div>

                <img src={pilotos} alt="foto dos pilotos" />

            </section>
        </>
    );
}