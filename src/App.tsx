import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { MenuLink } from './components/MenuLink/MenuLink';
import { SideMenu } from './components/SideMenu/SideMenu';
import { Status } from './components/Status/Status';
import { Layout } from './Layout/Layout';
import { Customers } from './Pages/Customers/Customers';
import { Help } from './Pages/Help/Help';
import { Home } from './Pages/Home/Home';
import { Income } from './Pages/Income/Income';
import { Product } from './Pages/Product/Product';
import { Promote } from './Pages/Promote/Promote';

const App = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Layout />}>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path='/Product'
					element={<Product />}
				/>
				<Route
					path='/Customers'
					element={<Customers />}
				/>
				<Route
					path='/Income'
					element={<Income />}
				/>
				<Route
					path='/Promote'
					element={<Promote />}
				/>
				<Route
					path='/Help'
					element={<Help />}
				/>

			</Route>
		</Routes>
	)
};

export default App;
