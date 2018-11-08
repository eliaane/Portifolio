import React from 'react';

const GroupCard = () => {
    return (
        <div>
            <h2>Blog</h2>
            <div className="card-group">
                <div className="card">
                    <img className="card-img-top" src="https://img.ibxk.com.br//2018/11/07/07114038939078-t1200x480.jpg" alt="Fachada de banco" />
                    <div className="card-body">
                        <h5 className="card-title">Banco HSBC sofre vazamento de dados: número de contas desconhecido</h5>
                        <p className="card-text" style={{textAlign:'justify'}}> O banco HSBC sofreu um vazamento em 2015 e parece que algumas lições ainda não foram aprendidas. Em alerta aos clientes e notificação para a Justiça da Califórnia (EUA), o HSBC confirmou um novo vazamento de dados de clientes ocorrido entre os dias 04 e 14 de outubro.</p>
                        <a href='https://www.tecmundo.com.br/seguranca/135973-banco-hsbc-sofre-vazamento-dados-numero-contas-desconhecido.htm'><button style={{background: 'gray', color:'white', borderRadius:'10px', padding:'10px'}}>Saiba Mais</button></a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://img.ibxk.com.br//2018/11/07/07120513244183-t1200x480.jpg" alt="Pessoas com óculos de realidade virtual" />
                    <div className="card-body">
                        <h5 className="card-title">Carrinho de controle remoto usa VR para ser dirigido em primeira pessoa</h5>
                        <p className="card-text" style={{textAlign:'justify'}}>Você sempre quis dirigir um carrinho de controle de remoto como se estivesse jogando um game de corrida em primeira pessoa? Pois é exatamente essa a proposta do Real Racer, um produto criado pela Kobotix que combina realidade virtual com os clássicos carrinhos para gerar uma experiência nova.</p>
                        <a href='https://www.tecmundo.com.br/produto/135976-carrinho-controle-remoto-usa-vr-dirigido-primeira-pessoa.htm'> <button style={{background: 'gray', color:'white', borderRadius:'10px', padding:'10px'}}>Saiba Mais</button></a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://img.ibxk.com.br//2018/11/07/07131428092225-t1200x480.jpg" alt="Tela de login" />
                    <div className="card-body">
                        <h5 className="card-title">Veja como os brasileiros gerenciam suas senhas em serviços online</h5>
                        <p className="card-text" style={{textAlign:'justify'}}>O gerenciamento de senhas é uma tarefa importante para quem preza pela segurança na internet, especialmente em um mundo em que cada vez mais sites permitem o login com o uso de passwords e somos obrigados a lembrar de uma porção deles para termos acesso a tudo. </p>
                        <a href='https://www.tecmundo.com.br/seguranca/135987-veja-brasileiros-gerenciam-senhas-servicos-online.htm'><button style={{background: 'gray', color:'white', borderRadius:'10px', padding:'10px'}}>Saiba Mais</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GroupCard;