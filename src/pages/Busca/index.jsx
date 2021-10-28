import '../../global.css'
import './style.css'
import Home from '../Home'
import api from '../../api';
import { useState } from 'react';
import verstappenLoading from '../../img/verstappen-puto.gif'

function Busca(props) {
    const [ano, setAno] = useState(0);
    const [sobrenome, setSobrenome] = useState(0);

    const step = props.step;
    const [pilotos, setPilotos] = useState([]);
    const [loading, setLoading] = useState(false);


    function BuscarTemporada() {

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
        );

    }


    function BuscarId() {

        async function GetPilotosById(uri) {
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
            <div className="container-pesquisa">
                <div className="pesquisa">
                    <input onChange={e => setSobrenome(e.target.value)} type="text" placeholder="Insira o sonhenome do piloto" />
                    <button onClick={() => {
                        // GetPilotos(`/drivers/${sobrenome}`)
                        setLoading(true)
                    }}>Buscar</button>

                </div>

                {loading && <img id="load" src={verstappenLoading} alt="sla" />}

                <div className="dadosPilotos">

                    {/* {pilotos.MRData.DriverTable.Drivers.map((piloto) => {
                        return (
                            <div className="blocoInfo">
                                <p>Nome: {piloto.givenName} {piloto.familyName}</p>
                                <p>Numero: {piloto.permanentNumber}</p>
                                <p>Nacionalidade: {piloto.nationality}</p>
                            </div>
                        )
                    })} */}

                </div>
            </div>
        );
    }

    return (
        <div>
            {step === 0 && <Home />}
            {step === 1 && BuscarTemporada()}
            {step === 2 && BuscarId()}
            {/* {step === 3 && BuscarEquipes()} */}
        </div>
    );
}

export default Busca;


// async function requestApi(uri) {
//     const res = await api.get(uri);
//     const { data } = await res;
//     parseString(data, function (err, result) {
//         console.log(result.MRData.DriverTable[0].Driver);
//         setPilotos(result.MRData.DriverTable[0].Driver)
//     });
//     setLoading(false)
// }
