import React from 'react';
import { IBtnProps } from './interface';
import './Button.scss';

const Button = ({ btnText, action, isSubmit = false } : IBtnProps) : JSX.Element => (
  <button type={isSubmit ? 'submit' : 'button'} onClick={action} className="btn">{btnText}</button>
);

export default Button;
