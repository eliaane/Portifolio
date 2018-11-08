import React from 'react';

const Infos = () => {
    return (
         <div> 
            <h2>Mais Informações</h2>  
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">Biografia Completa</h5>
                    <p class="card-text" style={{textAlign:'justify'}}>Meu nome é Eliane Madoenho, filha de Marta e Antonio, nascida em Congonhinhas no estado do Paraná. Sempre gostei de informação e por isso, nunca parei de estudar. Logo após o Ensino Médio ingressei na Universidade Estadual do Norte do Paraná no curso de Matemática, o qual conclui em 2010. Após a conclusão deste, ingressei no magistério, onde atuei nas disciplinas de Matemática, Física e Química para alunos do Ensino Fundamental e Médio. Em 2015, vi uma oportunidade de conhecer uma área totalmente inusitada, a Engenharia de Software, a qual estou hoje cursando.</p>
                </div>
            </div>
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">Mercado de trabalho</h5>
                    <p class="card-text"style={{textAlign:'justify'}}>Nunca atuei na área. Só tive contato com a parte teórica oferecida pelo curso, bem como pesquisas relacionadas.</p>
                </div>
            </div>
        </div>
    );
};
export default Infos;