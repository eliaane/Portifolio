import React from 'react';

const Formulario = () => {
    return (
        <form style={{marginB:'10px'}}>
        <h2>Contato</h2>
        <div className="form-group" >
          <label for="exampleFormControlInput0">Digite seu nome:</label>
          <input type="name" className="form-control" id="exampleFormControlInput0" placeholder="Nome"/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Digite seu e-mail:</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput2">Digite o assunto:</label>
          <input type="assunto" className="form-control" id="exampleFormControlInput2" placeholder="Assunto"/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Digite a mensagem:</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
        </div>
        <button style={{background: 'gray', color:'white', borderRadius:'10px', padding:'10px'}}>Enviar</button>
      </form>
    );
};

export default Formulario;