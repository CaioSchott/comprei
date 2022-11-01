import React from 'react';
import './style-forms.css';

export default function Forms () {
    return (
        <div className='container flex-form'>
            <form className='form' method='post'>
                <fieldset>
                    <legend>Preencha o formulário</legend>

            
                    <label className='title-input' for='nome' >Nome</label><br/>
                    <input className='input' type='text' name='nome' placeholder='Ex.: Luana Ferreira' /><br/>
                
                    <label className='title-input' for='email'>Email</label><br/>
                    <input className='input' type='email' name='email' placeholder='Digite seu email principal' /><br/>
                    
                    <label className='title-input' for='telefone'>Telefone</label><br/>
                    <input className='input' type='tel' name='telefone' placeholder='Digite seu telefone principal' /><br/>

                    <label className='title-input' for='cep'>CEP</label><br/>
                    <input className='input' type='number' name='cep' placeholder='Digite seu CEP' /><br/>

                    <label className='title-input' for='cidade'>Cidade</label><br/>
                    <input className='input' type='text' name='cidade' placeholder='Digite sua cidade' /><br/>
                    
                    <label className='title-input' for='estado'>Estado</label><br/>
                    <input className='input' type='text' name='estado' placeholder='Digite seu estado' /><br/>
                    
                    <label className='title-input' for='mensagem'>Mensagem</label><br/>
                    <textarea className='input' name='mensagem'>Como nos conheceu?</textarea><br/>
                
                    <button className='btn' type='submit'>Enviar</button>
                </fieldset>
            </form>

            <div className='img-form'>
                <img src='/assets/s.png' title='Tela APP Comprei Delivery' alt='Tela APP Comprei Delivery'/>

            </div>
        </div>
    )
}