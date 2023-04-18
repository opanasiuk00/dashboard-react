import React from 'react';
import styles from './Header.module.css';

export type HeaderProps = React.ButtonHTMLAttributes<HTMLDivElement> & {
	isActiveMobile: boolean;
	setIsActiveMobile: () => void;
};


export const Header = ({ isActiveMobile, setIsActiveMobile, className = '' }: HeaderProps): JSX.Element => {
	return (
		<header className={`${styles.header} ${className}`}>
			<h4>Dashboard</h4>
			<button className={`${styles.button} ${isActiveMobile ? styles.active : ''}`} onClick={setIsActiveMobile}>
				<span className={styles.line1}></span>
				<span className={styles.line2}></span>
				<span className={styles.line3}></span>
			</button>
		</header>
	)
};
