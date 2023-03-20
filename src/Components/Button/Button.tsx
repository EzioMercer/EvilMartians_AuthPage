import React, {MouseEventHandler} from 'react';
import styles from './Button.module.scss';

const Button = ({
	type,
	text,
	handleClick
}:{
	type?: 'button' | 'submit' | 'reset',
	text: string,
	handleClick?: MouseEventHandler<HTMLButtonElement>
}) => {
	return <button className={styles.button} type={type} onClick={handleClick}>{text}</button>
}

export default Button;
