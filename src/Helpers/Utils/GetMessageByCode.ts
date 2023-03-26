import {ErrorMessages} from '../Consts/ErrorMessagesAndCodes';
import {SuccessMessages} from '../Consts/SuccessMessagesAndCodes';

type MessageProps = {
	messageText: string,
	isError: boolean
}

const getMessageByCode = (messageCode: string): MessageProps => {
	console.log(messageCode);

	let message: MessageProps = {
		messageText: 'Something went wrong',
		isError: true,
	};

	if (messageCode in ErrorMessages) {
		message.messageText = ErrorMessages[messageCode as keyof ErrorMessages];
	} else if (messageCode in SuccessMessages) {
		message.messageText = SuccessMessages[messageCode as keyof SuccessMessages];
		message.isError = false;
	}

	return message;
}

export default getMessageByCode;
