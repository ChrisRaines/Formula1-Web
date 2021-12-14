import React from 'react';
import './style.css';
import '../../global.css';
import logo from '../../img/Logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header-container">
            <img id="logo" src={logo} alt="" />
            <ul className="menu">
                <Link to='/'><li>Home</li></Link>
                <Link to='/temporada'><li>Buscar Por Temporada</li></Link>
                <Link to='/piloto'><li>Buscar Piloto</li></Link>
                <li>Buscar Equipes</li>
            </ul>
        </div>
    );
}

export default Header;