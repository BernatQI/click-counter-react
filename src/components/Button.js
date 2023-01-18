import React from "react";
import '../stylesheets/Button.css';

function Button({ text, isClickButton, manageClick }) {
  return (
    <button
      className={isClickButton ? 'click-button' : 'reset-button'}
      onClick={manageClick}>
      {text}
    </button>
  )
}

export default Button;