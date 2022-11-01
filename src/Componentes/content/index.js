import React from 'react';
import './style-content.css';

export default function Content () {
    return (
        <section className='segmentos container'>
            <div className=' container flex-segmentos'>
                <img className='img-segmentos' src="/assets/FARMÁCIA.png" alt="Tela aplicativo COMPREI DELIVERY" title="Tela aplicativo COMPREI DELIVERY"/>
                <img className='img-segmentos' src="/assets/J copiar 6.png" alt="Tela aplicativo COMPREI DELIVERY" title="Tela aplicativo COMPREI DELIVERY"/>
                <img className='img-segmentos' src="/assets/s.png" alt="Tela aplicativo COMPREI DELIVERY" title="Tela aplicativo COMPREI DELIVERY"/>
                
                <div className='box-segmentos'>
                    <h2 className='titulo-box-segmentos'>Todos os segmentos</h2>
                    <div className='itens-segmentos'>
                        <p className='p-segmentos'>Supermercados</p>
                        <p className='p-segmentos'>Farmácias</p>
                        <p className='p-segmentos'>Eletrodomésticos</p>
                        <p className='p-segmentos'>Restaurantes</p>
                        <p className='p-segmentos'>Lanchonetes</p>
                        <p className='p-segmentos'>bares</p>
                        <p className='final-box-segmentos'><span>Todo varejo em geral</span></p>
                    </div>
                </div>  
            </div>
        </section>     
    )
}