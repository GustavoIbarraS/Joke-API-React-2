import React from "react";
import './header.css'
import PropTypes from 'prop-types'



class Header extends React.Component {
    render() {

        return (
            <div className="contenedor">
                <header className="header_style">
                    <h1 className="h1">{this.props.texto}</h1>
                </header>

            </div>
        );
    };

}

Header.propTypes = {
    texto: PropTypes.string
}

export default Header;



