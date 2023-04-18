import React from 'react';
import { PopupProps } from './Popup.props';
import styles from './Popup.module.css';

export const Popup = ({ children, isActive, className = '' }: PopupProps): JSX.Element | null => {
	if (!isActive) {
		return null
	}

	return (
		<div className={`${styles.popup} ${className}`}>{children}</div>
	)
};
