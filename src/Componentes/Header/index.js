import React from 'react';
import { Link } from 'react-router-dom';
import './style-topo.css';

export default function Header () {
    return (
        <header>
            <div className='container topo'>
            <img className='logo-header' src='/assets/logo-app-branca.png' alt='COMPREI DELIVERY' title='COMPREI DELIVERY'/>
        
            <div className='links-meio'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/seja-um-franqueado'>Seja um franqueado</Link>
            </div>

            <a className='login' href='https://www.compreidelivery.com.br/'>Login</a>

            </div>
        </header>

    )
}

