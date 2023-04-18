import React from 'react';
import { ModalWindowProps } from './ModalWindow.props';
import styles from './ModalWindow.module.css';
import { Portal } from '../Portal/Portal';

export const ModalWindow = ({ children, isActive, setActive }: ModalWindowProps): JSX.Element | null => {
	console.log(isActive)
	if (!isActive) {
		return null
	};

	return (
		<Portal>
			<div className={styles.modal}>{children}</div>
		</Portal>
	)
};
