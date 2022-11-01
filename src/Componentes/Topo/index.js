import React from 'react';
import { Link } from 'react-router-dom';
import './style-topo.css';

export default function Header () {
    return (
        <header>
            <div class="secao-topo container">
                <img class="logo-topo" src="/assets/logo-app-branca.png" alt="Logo COMPREI DELIVERY" title="Logo COMPREI DELIVERY"/> 

                <div class="links-centro-topo">
                    <Link className="link-topo" to='/'>Home</Link>
                    <Link className="link-topo" to='/seja-um-franqueado'>Seja um franqueado</Link>
                </div>

                <a class="login" href="https://www.compreidelivery.com.br/">Login</a>
            </div>        
        
        </header>
    )
}

