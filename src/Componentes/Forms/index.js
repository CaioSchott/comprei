import React, {useRef} from 'react';
import './style-forms.css';
import emailjs from '@emailjs/browser'

export default function Forms () {
    
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('comprei-forms', 'template_szclps3', form.current, 'BELxbOq6hh43YSvYw')
        .then((result) => {
            alert("Mensagem enviada com sucesso.")
        }, (error) => {
            alert(error.message)
        });
        e.target.reset();
    };

    return (

        <div className='container flex-form'>
            <form className='form' method='post' ref={form} onSubmit={sendEmail}>
                <fieldset>
                    <legend>Preencha o formulário</legend>

            
                    <label className='title-input' for='nome' >Nome</label><br/>
                    <input className='input' type='text' name='nome' placeholder='Ex.: Luana Ferreira' required/><br/>
                
                    <label className='title-input' for='email'>Email</label><br/>
                    <input className='input' type='email' name='email' placeholder='Digite seu email principal' required/><br/>
                    
                    <label className='title-input' for='telefone'>Telefone</label><br/>
                    <input className='input' type='tel' name='telefone' placeholder='Digite seu telefone principal' required/><br/>

                    <label className='title-input' for='cep'>CEP</label><br/>
                    <input className='input' type='number' name='cep' placeholder='Digite seu CEP' required/><br/>

                    <label className='title-input' for='cidade'>Cidade</label><br/>
                    <input className='input' type='text' name='cidade' placeholder='Digite sua cidade' required/><br/>
                    
                    <label className='title-input' for='estado'>Estado</label><br/>
                    <input className='input' type='text' name='estado' placeholder='Digite seu estado' required/><br/>
                    
                    <label className='title-input' for='mensagem'>Mensagem</label><br/>
                    <textarea className='input' name='mensagem' placeholder='Como nos conheceu?'></textarea><br/>

                   <input className='btn' type="submit" value="Enviar"/>
                </fieldset>
            </form>

            <div className='img-form'>
                <img src='/assets/s.png' title='Tela APP Comprei Delivery' alt='Tela APP Comprei Delivery'/>

            </div>
        </div>
    )
}