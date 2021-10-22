import React from 'react';
import './Button.scss';
import { IBtnProps } from '../../models/btn-props-model';

const Button = ({ btnText, action } : IBtnProps) : JSX.Element => (
  <button type="button" onClick={action} className="btn">{btnText}</button>
);

export default Button;
