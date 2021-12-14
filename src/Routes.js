import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuscarId from './pages/BuscarPiloto'
import BuscarTemporada from './pages/BuscarTemporada'
import Home from './pages/Home'

//BrowserRouter (Router): da acesso para usar os recursos de rotas
//Routes: permite navegar entre as rotas
//Route : cria a rota em si

function Rotas() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/temporada" element={<BuscarTemporada />} />
                    <Route exact path="/piloto" element={<BuscarId />} />
                </Routes>
            </Router>
        </>
    )

}

export default Rotas;