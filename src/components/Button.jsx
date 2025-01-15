// Button.js
import React from 'react';
import './Button.css';
// import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  to // Optional 'to' prop for navigation
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const buttonElement = (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );

  // Conditionally render as a Link if 'to' is provided, otherwise render a normal button
  return to ? (
    <Link to={to} className="btn-mobile">
      {buttonElement}
    </Link>
  ) : (
    buttonElement
  );
};
