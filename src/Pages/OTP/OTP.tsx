import React, {useEffect, useState} from 'react';
import styles from './OTP.module.scss';
import {InputProps} from '../../Components/Input/Input';
import {useOTPMutation} from '../../Redux/api';
import {changeLoadingState} from '../../Redux/Slices/LoadingSlice';
import useTypedDispatch from '../../Helpers/Hooks/useTypedDispatch';
import {Link, useNavigate, useSearchParams} from 'react-router-dom';
import Form from '../../Components/Form/Form';

type UserOTPData = {
	otp: string
}

const OTP = () => {
	const dispatch = useTypedDispatch();
	const navigate = useNavigate();
	const [checkOTP] = useOTPMutation();
	const [messageCode, setMessageCode] = useState('');
	const [urlParams] = useSearchParams();

	const otp = urlParams.get('oobCode');

	const inputs: InputProps[] = [
		{
			type: 'text',
			name: 'otp',
			label: 'OTP',
			defaultValue: otp,
			required: true,
		}
	];

	const handleSubmit = async (submitData: UserOTPData) => {
		const data = await checkOTP(submitData);

		dispatch(changeLoadingState(false));

		if ('error' in data) {
			setMessageCode(data.error as string);
			return;
		}

		navigate('/confirm-new-password', {state: otp ?? submitData.otp});
	};

	useEffect(() => {
		(async () => {
			if (otp) {
				dispatch(changeLoadingState(true));

				await handleSubmit({otp})
			}
		})()
	}, [])

	return (
		<>
			<Form
				inputs={inputs}
				messageCode={messageCode}
				submitBtnText={'Confirm OTP'}
				handleSubmit={handleSubmit}
				removeErrorMessageHandler={() => setMessageCode('')}
			/>
			<div className={styles.footer}>
				<Link to={'/sign-up'}>Create an account</Link>
				<Link to={'/sign-in'}>Sign in</Link>
			</div>
		</>
	);
};

export default OTP;
