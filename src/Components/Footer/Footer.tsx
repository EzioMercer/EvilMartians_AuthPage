import React from 'react';
import style from './Footer.module.scss'

const Footer = ({text}: {text: string}) => {
	return <h1><span className={style.blue}>{text}</span></h1>
}

export default Footer;
