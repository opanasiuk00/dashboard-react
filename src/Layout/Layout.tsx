import React, { useState } from 'react';
import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import { SideMenu } from '../components/SideMenu/SideMenu';
import { Header } from '../components/Header/Header';

export const Layout = () => {

	const [showMobileMenu, setShowMobileMenu] = useState(false);

	const handleToggle = () => {
		setShowMobileMenu(prev => !prev);
	}

	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} isActiveMobile={showMobileMenu} setIsActiveMobile={handleToggle} />
			<SideMenu className={styles.menu} isActiveMobile={showMobileMenu} setIsActiveMobile={handleToggle} />
			<main className={styles.content}>
				<Outlet />
			</main>
		</div>
	);

}
