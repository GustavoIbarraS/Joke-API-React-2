import React from 'react';
import JokeComponent from './JokeComponent';
import './App.css';
import Header from './visual/Header';
import Footer from './visual/Footer';
import Portada from './visual/Portada';
import Separador from './visual/Separador';
import Joke from './visual/Joke';
//import { getData } from './visual/component';
import { getData } from './visual/component';

const Joke_API = [
  {id: 1, nombre: 'Chiste 1'},
  {id: 2, nombre: 'Chiste 2'},
  {id: 3, nombre: 'Chiste 3'},
  {id: 4, nombre: 'Chiste 4'},
  {id: 5, nombre: 'Chiste 5'},
  {id: 6, nombre: 'Chiste 6'},
  {id: 7, nombre: 'Chiste 7'},
  {id: 8, nombre: 'Chiste 8'}
]



function App() {
  getData();
  return (
    <div className="App">
      <div className='main-container'>
      <Joke
          texto="Mira estos chistes:..."
          LJoke={Joke_API}/>
        {/*
        <Header texto="JOKE"/>

          <Portada/>

          <Separador
            texto="Galeria de chistes."
          />

          <Joke
          texto="Mira estos chistes:..."
          LJoke={Joke_API}/>

          <Footer className="container-footer"
            texto="Equipo Joke_API"
        />
  */}
        
      </div>
    </div>
  );
}

export default App;
