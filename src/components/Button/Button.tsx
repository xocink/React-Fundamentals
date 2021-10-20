import React from 'react';
import './Button.scss';
import { IBtnProps } from '../../models/btn-props-model';

const Button = ({ btnText } : IBtnProps) => (
  <button type="button" className="btn">{btnText}</button>
);

export default Button;
