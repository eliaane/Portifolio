import React from 'react';

const Portifolio = () => {
    return (
        <div>
            <h2>Portifólio</h2>
            <p style={{textAlign:'justify'}}>Alguns trabalhos realizados na disciplina de Web.</p>
            <div className="card-group">
                <div className="card">
                    <img className="card-img-top" src="https://eduardosalerno.com.br/wp-content/uploads/2018/04/fd4ef6230d1c1b8a0f8be99f3b8bbdd2.png" alt="Card image cap"/>
                        <div className="card-body">
                            <a href='https://github.com/diogocezar/dctb-utfpr-2018-2/tree/master/programacao-web/if66h-es61/ta01/eliane'><h5 className="card-title">Curriculum</h5></a>
                            <p className="card-text">Trabalho realizado com HTML.</p>
                            
                        </div>
                </div>
                    <div className="card">
                        <img className="card-img-top" src="https://spzone-simpleprogrammer.netdna-ssl.com/wp-content/uploads/2017/04/Untitled-1-1024x576.png" alt="Card image cap"/>
                            <div className="card-body">
                                <a href='https://github.com/diogocezar/dctb-utfpr-2018-2/tree/master/programacao-web/if66h-es61/ta05/eliane-madoenho'><h5 className="card-title">SASS</h5></a>
                                <p className="card-text">Trabalho realizado com SASS.</p>
                            </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Letters_SVG.svg/2000px-Letters_SVG.svg.png" alt="Card image cap"/>
                    <div className="card-body">
                    <a href = 'https://github.com/diogocezar/dctb-utfpr-2018-2/tree/master/programacao-web/if66h-es61/ta07/eliane-madoenho'><h5 className="card-title">SVG</h5></a>
                        <p className="card-text">Trabalho de manipulação de SVG .</p>
                    </div>
                </div>
            </div>
        </div>    
    );
};
export default Portifolio;