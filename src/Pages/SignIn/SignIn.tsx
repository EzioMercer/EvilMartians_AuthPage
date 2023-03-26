import React, {useState} from 'react';
import styles from './SignIn.module.scss';
import {InputProps} from '../../Components/Input/Input';
import {useSignInMutation} from '../../Redux/api';
import {changeLoadingState} from '../../Redux/Slices/LoadingSlice';
import useTypedDispatch from '../../Helpers/Hooks/useTypedDispatch';
import {Link, useNavigate} from 'react-router-dom';
import {saveUserData} from '../../Redux/Slices/UserDataSlice';
import Form from '../../Components/Form/Form';

type UserSignData = {
    email: string,
    password: string
}

const SignIn = () => {
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();
    const [signInUser] = useSignInMutation();
    const [messageCode, setMessageCode] = useState('');

    const inputs: InputProps[] = [
        {
            type: 'email',
            name: 'email',
            label: 'Email address',
            required: true
        },
        {
            type: 'password',
            name: 'password',
            label: 'Password',
            required: true
        }
    ];

    const handleSubmit = async (submitData: UserSignData) => {
        const data = await signInUser(submitData);

        dispatch(changeLoadingState(false));

        if ('error' in data) {
            setMessageCode(data.error as string);
            return;
        }

        if (data.data) dispatch(saveUserData(data.data))

        navigate('/');
    }

    return (
        <>
            <Form
                inputs={inputs}
                messageCode={messageCode}
                submitBtnText={'Sign in'}
                handleSubmit={handleSubmit}
                removeErrorMessageHandler={() => setMessageCode('')}
            />
            <div className={styles.footer}>
                <Link to={'/sign-up'}>Create an account</Link>
                <Link to={'/reset-password'}>Forgot password?</Link>
            </div>
        </>
    );
}

export default SignIn;
