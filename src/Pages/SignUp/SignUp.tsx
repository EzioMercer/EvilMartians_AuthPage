import React, {useState} from 'react';
import styles from './SignUp.module.scss';
import {InputProps} from '../../Components/Input/Input';
import {useSignUpMutation} from '../../Redux/api';
import {changeLoadingState} from '../../Redux/Slices/LoadingSlice';
import useTypedDispatch from '../../Helpers/Hooks/useTypedDispatch';
import {Link, useNavigate} from 'react-router-dom';
import {saveUserData} from '../../Redux/Slices/UserDataSlice';
import Form from '../../Components/Form/Form';

type UserSignUpData = {
	email: string,
	password: string,
	confirmPassword: string
}

const SignUp = () => {
	const dispatch = useTypedDispatch();
	const navigate = useNavigate();
	const [signUpUser] = useSignUpMutation();
	const [messageCode, setMessageCode] = useState('');

	const inputs: InputProps[] = [
		{
			type: 'email',
			name: 'email',
			label: 'Email address',
			required: true,
		},
		{
			type: 'password',
			name: 'password',
			label: 'Password',
			required: true,
		},
		{
			type: 'password',
			name: 'confirmPassword',
			label: 'Confirm password',
			required: true,
		},
	];

	const handleSubmit = async (submitData: UserSignUpData) => {
		if (submitData.password !== submitData.confirmPassword) {
			setMessageCode('wrong-confirm-password');
			dispatch(changeLoadingState(false));
			return;
		}

		const data = await signUpUser(submitData);

		dispatch(changeLoadingState(false));

		if ('error' in data) {
			setMessageCode(data.error as string);
			return;
		}

		if (data.data) dispatch(saveUserData(data.data));

		navigate('/');
	};

	return (
		<>
			<Form
				inputs={inputs}
				messageCode={messageCode}
				submitBtnText={'Sign up'}
				handleSubmit={handleSubmit}
				removeErrorMessageHandler={() => setMessageCode('')}
			/>
			<div className={styles.footer}>
				<Link to={'/reset-password'}>Forgot password?</Link>
				<Link to={'/sign-in'}>Sign in</Link>
			</div>
		</>
	);
};

export default SignUp;
