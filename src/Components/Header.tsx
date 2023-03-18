import React from 'react';
import style from './Header.module.scss'

const Header = ({text}: {text: string}) => {
	return <h1>Test <span className={style.red}>{text}</span></h1>
}

export default Header;
