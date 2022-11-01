import React from 'react';
import './style-maine.css';
import { Link } from 'react-router-dom'
 
export default function MainE () {
    return (
        <section className='maine'>
                <section className="secao-opcao">
                    <h1 className="titulo-opcao">Central de Privacidade</h1>

                    <Link className="link-inicial" to='/'>Página inicial da Central de Privacidade</Link>

                    <details className="politicas" open>
                        <summary className="titulo-politicas">Políticas de Privacidade</summary>
                        <p className="link-fora"> <Link className="link-dentro" to='/politicas-Site-Comprei-Delivery'>Política do Site COMPREI DELIVERY</Link></p>
                    </details>       
                </section>
        </section>
    )
}

