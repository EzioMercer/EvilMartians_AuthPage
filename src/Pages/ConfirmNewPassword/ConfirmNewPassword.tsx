import React, {useEffect, useState} from 'react';
import styles from './ConfirmNewPassword.module.scss';
import {InputProps} from '../../Components/Input/Input';
import {useSetNewPasswordMutation} from '../../Redux/api';
import {changeLoadingState} from '../../Redux/Slices/LoadingSlice';
import useTypedDispatch from '../../Helpers/Hooks/useTypedDispatch';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import Form from '../../Components/Form/Form';
import {ErrorCodes} from '../../Helpers/Consts/ErrorMessagesAndCodes';
import {Nullable} from '../../Helpers/Types/Nullable';

type UserConfirmNewPasswordData = {
	password: string,
	confirmPassword: string
}

const ConfirmNewPassword = () => {
	const dispatch = useTypedDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const otp: Nullable<string> = location.state;
	const [setNewPassword] = useSetNewPasswordMutation();
	const [messageCode, setMessageCode] = useState('');

	const inputs: InputProps[] = [
		{
			type: 'password',
			name: 'password',
			label: 'New password',
			required: true,
		},
		{
			type: 'password',
			name: 'confirmPassword',
			label: 'Confirm new password',
			required: true,
		},
	];

	useEffect(() => {
		if (otp === null) navigate(`/${PROJECT_NAME}/otp`);
	}, [])

	const handleSubmit = async (submitData: UserConfirmNewPasswordData) => {
		if (submitData.password !== submitData.confirmPassword) {
			setMessageCode(ErrorCodes.WrongConfirmPassword);
			dispatch(changeLoadingState(false));
			return;
		}

		const data = await setNewPassword({...submitData, otp: otp as string});

		dispatch(changeLoadingState(false));

		if ('error' in data) {
			setMessageCode(data.error as string);
			return;
		}

		navigate(`/${PROJECT_NAME}/sign-in`);
	};

	return (
		<>
			<Form
				inputs={inputs}
				messageCode={messageCode}
				submitBtnText={'Confirm new password'}
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

export default ConfirmNewPassword;
