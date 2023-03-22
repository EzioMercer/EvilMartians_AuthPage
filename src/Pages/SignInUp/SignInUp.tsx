import React, {FormEvent, useState} from 'react';
import styles from './SignInUp.module.scss';
import Input from '../../Components/Input/Input';
import serializeFormData from '../../Helpers/Utils/SerializeFormData';
import {useSignInUpMutation} from '../../Redux/api';
import Button from '../../Components/Button/Button';
import {changeLoadingState} from '../../Redux/Slices/LoadingSlice';
import useTypedDispatch from '../../Helpers/Hooks/useTypedDispatch';
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';
import {useNavigate} from 'react-router-dom';
import {saveUserData} from '../../Redux/Slices/UserDataSlice';

const SignInUp = () => {
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();
    const [signInUpUser] = useSignInUpMutation();
    const [errorCode, setErrorCode] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const serializedFormData = serializeFormData(formData);

        dispatch(changeLoadingState(true));

        const data = await signInUpUser(serializedFormData);

        dispatch(changeLoadingState(false));

        if ('error' in data) {
            setErrorCode(data.error as string);
            return;
        }

        if (data.data) dispatch(saveUserData(data.data))

        navigate('/');
    }

    return (
        <>
            {errorCode !== '' && <ErrorMessage errorCode={errorCode} removeHandler={() => setErrorCode('')}/>}
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input required={true} label="Email address" type="email" name="email"></Input>
                <Input required={true} label="Password" type="password" name="password"></Input>
                <Button type="submit" text="Sign in/up"/>
            </form>
        </>
    )
}

export default SignInUp;
