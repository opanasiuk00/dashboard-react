import React, { useState } from 'react';
import { UserProps } from './User.props';
import styles from './User.module.css';
import defaultPhoto from './photo-cover.svg';
import { Popup } from '../Popup/Popup';
import { Button } from '../Button/Button';

export const User = ({ image, name, position, className = '', ...props }: UserProps): JSX.Element => {

	const [isHovering, setIsHovering] = useState<boolean>(false);

	const onMouseOverOnUser = () => {
		setIsHovering(true);
	}
	const onMouseOutOnUser = () => {
		setIsHovering(false);
	}

	return (
		<div className={`${className} ${styles.user}`} onMouseOver={onMouseOverOnUser} onMouseOut={onMouseOutOnUser}>
			<img className={styles.photo} onError={({ currentTarget }) => { currentTarget.src = defaultPhoto; }} src={image} alt='name' />
			<h4 className={styles.name}>{name}</h4>
			<p className={styles.position}>{position}</p>
			<Popup isActive={isHovering}>
				<Button>Exit</Button>
			</Popup>
		</div>
	)
};
