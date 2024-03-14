import React from "react";

const button = ({ buttonText, buttonColor, onClick }) => {
    return <button onClick={onClick} style={{ backgroundColor: buttonColor }} className="btn">{buttonText}</button>;
};

export default button;
