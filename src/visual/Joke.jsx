import React from "react";
import './joke.css'
import PropTypes from 'prop-types'
import JokeComponent from "../JokeComponent";


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

const handleClick =()=>{
  alert('>:)');
};



class joke extends React.Component{
  
    render(){
        const {Ljoke} = this.props;
        return(
            <div>
              <p className="joke_h1">{this.props.texto}</p>
            {Joke_API.map((elemento) => (
              <div key={elemento.id}>
                {elemento.nombre}
              </div>
            ))}
            <button className="joke_button" onClick={handleClick}>Diversion!!!</button>
          </div>
        );
    };
}

joke.defaultProps = {
  texto:"Solo una risa."
}

joke.propTypes={
  texto:PropTypes.string
}

export default joke;
