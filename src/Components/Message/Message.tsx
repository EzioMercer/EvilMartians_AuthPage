import React, {MouseEventHandler} from 'react';
import styles from './Message.module.scss'
import getMessageByCode from '../../Helpers/Utils/GetMessageByCode';

const Message = ({
	messageCode,
	removeHandler
}:{
	messageCode: string,
	removeHandler: MouseEventHandler<HTMLButtonElement>
}) => {
	const message = getMessageByCode(messageCode);

	return (
		<div className={`${styles.message} ${message.isError ? styles.error : styles.success}`}>
			<span>{message.messageText}</span>
			<button onClick={removeHandler}>x</button>
		</div>
	)
}

export default Message;
