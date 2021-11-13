import React from 'react';
import classNames from 'classnames/bind';
import { IBtnProps } from './interface';
import styles from './Button.module.scss';

const Button = ({
  btnText, action, isSubmit = false, btnClassName = '',
} : IBtnProps) : JSX.Element => {
  const btnClasses = classNames(styles.btn, btnClassName);
  return (
    <button type={isSubmit ? 'submit' : 'button'} onClick={action} className={btnClasses}>{btnText}</button>
  );
};

export default Button;
