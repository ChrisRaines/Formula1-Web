import '../../global.css'
import './style.css'
import api from '../../api';
import { useState } from 'react';
import verstappenLoading from '../../img/verstappen-puto.gif'
import Header from '../../components/Header';


function BuscarTemporada(props) {
    const [ano, setAno] = useState(0);
    const [pilotos, setPilotos] = useState([]);
    const [loading, setLoading] = useState(false);


    async function GetPilotos(uri) {
        try {
            const res = await api.get(uri);
            setPilotos(res);
            setLoading(false)
            return res;
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            <Header />
            <div className="container-pesquisa">
                <div className="pesquisa">
                    <input onChange={e => setAno(e.target.value)} type="text" placeholder="Insira o ano" />
                    <button onClick={() => {
                        GetPilotos(`/${ano}/drivers.json`);
                        setLoading(true)
                    }}>Buscar</button>
                </div>

                {loading && <img id="load" src={verstappenLoading} alt="sla" />}

                <div className="dadosPilotos">
                    {pilotos.data !== undefined &&
                        pilotos.data.MRData.DriverTable.Drivers.map((piloto) => {
                            return (
                                <div className="blocoInfo">
                                    <p><b>Nome:</b> {piloto.givenName} {piloto.familyName}</p>
                                    <p><b>Numero:</b> {piloto.permanentNumber}</p>
                                    <p><b>Nacionalidade:</b> {piloto.nationality}</p>
                                    <p><b>Nascimento:</b> {piloto.dateOfBirth}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );

}


export default BuscarTemporada;


