import React from 'react';
import './style.css';
import '../../global.css';
import logo from '../../img/Logo.png';

function FormHeader(props) {
    return (

        <div className="header-container">
            <img id="logo" src={logo} alt="" />
            <ul className="menu">
                <li onClick={() => props.setStep(0)}>Home</li>
                <li onClick={() => props.setStep(1)}>Buscar Por Temporada</li>
                <li onClick={() => props.setStep(2)}>Buscar Piloto</li>
                <li onClick={() => props.setStep(3)}>Buscar Equipes</li>
            </ul>
        </div>

    );
}

export default FormHeader;