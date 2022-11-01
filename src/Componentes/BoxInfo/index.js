import React from 'react';
import './style-boxinfo.css';

export default function BoxInfo () {
    return (
        <div className='container box'>
            <img className='check' src='./assets/check.png' title='Check' alt='Check'/>
            <div className='info-box'>
                <h2>Plataforma completa para nossos franqueados</h2>
                <p>Nosso sistema conta com ferramentas premium para administração e gestão dos lojistas de sua cidade,
                    contando também com balanços semanais e mensais de vendas e produtos com potencial.
                </p>
            </div>
        </div>
    )
}