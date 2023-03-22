import React from 'react';
import styles from './ErrorMessage.module.scss'

const ErrorMessage = ({
	errorCode,
	removeHandler
}:{
	errorCode: string,
	removeHandler: () => void
}) => {

	let errorText = '';

	switch (errorCode) {
		case 'auth/wrong-password':
			errorText = 'Wrong password';
			break;
		case 'auth/weak-password':
			errorText = 'Password must be at least 6 characters';
			break;
		default:
			errorText = 'Something went wrong';
	}

	return (
		<div className={styles['error-message']}>
			<span>{errorText}</span>
			<button onClick={removeHandler}>X</button>
		</div>
	)
}

export default ErrorMessage;
