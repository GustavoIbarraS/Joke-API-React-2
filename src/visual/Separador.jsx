import React from "react";
import './separador.css'
import PropTypes from 'prop-types'


function Separador({texto}){

        return(
            <div className="contenedor">
                <header className="header_style">
                    <p className="p">{texto}</p>
                </header>

            </div>
        );
}

Separador.defaultProps = {
    texto: 'Te gusto los chistes!!!?'
}
Separador.propTypes={
    texto:PropTypes.string
}

export default Separador;


