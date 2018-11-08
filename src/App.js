import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/Menu';
import Formulario from './components/formulario/Formulario';
import Card from './components/card/Card';
import GroupCard from './components/group-card/GroupCard';
import Detalhes from './components/detalhes/Detalhes';
import Infos from './components/infos/Infos';
import Habilidades from './components/habilidades/Habilidades';
import Portifolio from './components/portifolio/Portifolio';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="container-fluid" style={{display:'flex', flexDirection:'column', padding:'20px', margin: '10px'}}>
        <section><Menu/></section>
        <section><Card/></section>
        <section><Detalhes/></section>
        <section><Habilidades/></section>
        <section><GroupCard/></section>
        <section><Portifolio/></section>
        <section><Infos/></section>
        <section><Formulario/></section>
        <section><Footer/></section>
      </div>
    );
  }
}

export default App;
