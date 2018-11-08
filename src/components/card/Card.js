import React from 'react';
import img from './img.jpg';

const Card = () => {
    return(
        <div>
            <h2>Sobre</h2>
            <div class="row" style={{flexDirection: 'row'}}>
                <div className="card" style={{width: '8rem'}}> 
                    <img className="card-img-top rounded mx-auto" src={img} alt="Card image cap"/>
                </div>
                <div className="card-body">
                    <p className="card-text">Meu nome é Eliane Madoenho, atualmente curso o curso de Engenharia de Software da Universidade Tecnológica Federal do Paraná campus Cornélio Procópio. Sou de Congonhinhas/PR, onde moro.</p>
                </div>
            </div>
        </div>
    );
};
export default Card;