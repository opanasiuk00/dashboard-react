import React from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';

export const Button = ({ children }: ButtonProps): JSX.Element => {
	return (
		<button className={styles.button}>{children}</button>
	)
};
