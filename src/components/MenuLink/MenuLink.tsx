import React from 'react';
import styles from './MenuLink.module.css';
import { ArrowIcon } from '../Icons';

export type MenuLinkType = React.ComponentPropsWithRef<'a'> & {
	children: React.ReactNode;
	icon: React.ReactNode;
}

export const MenuLink = ({ children, icon, className, ...props }: MenuLinkType): JSX.Element => {
	return (
		<a className={`${styles.MenuLink} ${className ? styles[className] : ''}`} {...props}>
			<span className={styles.icon}>{icon}</span>
			<span>{children}</span>
			<span className={styles.arrow}>
				<ArrowIcon />
			</span>
		</a>
	)
};
