import { useState } from "react";
import Loading from "./loading";
import Message from "./message";



export default function FormSection(){

  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ showMessage, setShowMessage ] = useState(false);

  const applyPhoneMask = (e)=>{   
    const newValue = mphone(e.target.value);
    setPhone(newValue);
  }

  const submitForm = (e) => {
    e.preventDefault();
    console.log(JSON.stringify({name, email, phone}));

    setEmail('');
    setName('');
    setPhone('');
    setLoading(true);

    setTimeout(() =>{
      setLoading(false);
      setShowMessage(true);      
    }, 2000);


  }

  return (
    <section className="root-form">
      <Loading active={ loading }/>
      <Message active={ showMessage } close={() => setShowMessage(false) } />
      <div className="section-form-container">     
      <header className="root-heading-2">
        <h2 className="title">Preparado para fazer parte da nossa iniciativa?</h2>
        <p className="subtitle">Preencha todos os campos para que possamos entrar em contato.</p>        
      </header>      
        <form className="form" onSubmit={ submitForm }>
          <div className="item"> 
            <label htmlFor="name" className={ name ? 'active' : null }>Nome Completo</label>          
            <input type="text" id="name" value={ name } onChange={ (e)=>  setName(e.target.value) } required/>           
          </div>
          <div className="item">      
            <label htmlFor="email" className={ email ? 'active' : null }>E-mail</label>      
            <input type="email" id="email" value={ email }onChange={ (e)=>  setEmail(e.target.value) } required/>            
          </div>
          <div className="item">   
            <label htmlFor="phone" className={ phone ? 'active' : null }>Telefone celular</label>        
            <input type="tel"  id="phone" value={ phone } onChange={ (e) => applyPhoneMask(e) } required pattern="\([0-9]{2}\)[\s][0-9]{5}-[0-9]{4}"/>            
          </div>          
          <button type="submit">
            <span>Cadastre-se</span>
            <img className='icon-arrow' src="/icons/arrow-right.svg" alt="icone seta para a direita" />
          </button>          
        </form>    
        </div>  
    </section> 
  )
}



// Adapted from:
// https://stackoverflow.com/questions/15802100/phone-mask-for-text-field-with-regex/15803006#15803006
function mphone(value) {
  let response = value.replace(/\D/g,"");
  
  response = response.replace(/^0/,""); 
  if (response.length > 7) {      
    response = response.replace(/^(\d\d)(\d{5})(\d{0,4}).*/,"($1) $2-$3");
  }
  else if (response.length > 2) {
    response = response.replace(/^(\d\d)(\d{0,5})/,"($1) $2");
  }
  else if(response.length > 0){    
    response = response.replace(/^(\d*)/, "($1");      
  }
  return response;
}