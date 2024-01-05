import React, {useState} from 'react';
import styles from './ResetPassword.module.scss';
import {InputProps} from '../../Components/Input/Input';
import {useResetPasswordMutation} from '../../Redux/api';
import {changeLoadingState} from '../../Redux/Slices/LoadingSlice';
import useTypedDispatch from '../../Helpers/Hooks/useTypedDispatch';
import {Link} from 'react-router-dom';
import Form from '../../Components/Form/Form';
import {SuccessCodes} from '../../Helpers/Consts/SuccessMessagesAndCodes';

type UserResetPasswordData = {
	email: string
}

const ResetPassword = () => {
	const dispatch = useTypedDispatch();
	const [resetPassword] = useResetPasswordMutation();
	const [messageCode, setMessageCode] = useState('');

	const inputs: InputProps[] = [
		{
			type: 'email',
			name: 'email',
			label: 'Email address',
			required: true,
		}
	];

	const handleSubmit = async (submitData: UserResetPasswordData) => {
		const data = await resetPassword(submitData);

		dispatch(changeLoadingState(false));

		if ('error' in data) {
			setMessageCode(data.error as string);
		} else {
			setMessageCode(SuccessCodes.SuccessfullySentEmail);
		}
	};

	return (
		<>
			<Form
				inputs={inputs}
				messageCode={messageCode}
				submitBtnText={'Send password reset email'}
				handleSubmit={handleSubmit}
				removeErrorMessageHandler={() => setMessageCode('')}
			/>
			<div className={styles.footer}>
				<Link to={`/${PROJECT_NAME}/sign-up`}>Create an account</Link>
				<Link to={`/${PROJECT_NAME}/sign-in`}>Sign in</Link>
			</div>
		</>
	);
};

export default ResetPassword;
