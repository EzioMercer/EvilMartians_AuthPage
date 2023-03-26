import React from 'react';
import styles from './Header.module.scss';

const Header = ({text}: {text: string}) => {
	return <h1><span className={styles['header-text']}>{text}</span></h1>
}

export default Header;
