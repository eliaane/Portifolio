import React from 'react';

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{position:'fixed', zIndex: 9999, right:'0', top: '0'}}>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Sobre</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Detalhes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Habilidades</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Portifólio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Mais Informações</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Menu;