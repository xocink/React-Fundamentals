import React from 'react';
import './Button.scss';
import { IBtnProps } from '../../../models/btn-props-model';

const DeleteButton = ({ btnText, deleteAction, deletedItem } : IBtnProps) : JSX.Element => (
  <button type="button" onClick={() => deleteAction!(deletedItem!)} className="btn">{btnText}</button>
);

export default DeleteButton;
