import React from 'react';
import './Button.scss';
import { IBtnProps } from './interface';

const Button = ({ btnText, action, isSubmit = false } : IBtnProps) : JSX.Element => (
  <button type={isSubmit ? 'submit' : 'button'} onClick={action} className="btn">{btnText}</button>
);

export default Button;

// enum EButtonType  {
//   SUBMIT : 'submit',
//   BUTTON : 'button',
//
// }
