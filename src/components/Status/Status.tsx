import React from 'react';
import { StatusProps } from './Status.props';
import styles from './Status.module.css';

export const Status = ({ isActive }: StatusProps): JSX.Element => {
	return (
		<div className={`${styles.status} ${isActive ? styles.active : styles.inactive}`}>
			{isActive ? 'Active' : 'Inactive'}
		</div>
	)
}
