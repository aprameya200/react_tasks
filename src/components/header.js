import React from "react";
import Button from "./button";

import PropTypes from 'prop-types';

const Header = ({ text, onClick }) => {


    return (
        <header className="header">
            <h1>{text}</h1>
            <Button onClick={onClick} buttonText={text} buttonColor="blue" ></Button>
        </header>
    );
};

Button.defaultProps = {
    color: "steelBlue"
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Header;
