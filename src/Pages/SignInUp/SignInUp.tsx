import React, {FormEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './SignInUp.module.scss';
import Input from '../../Components/Input/Input';
import serializeFormData from '../../Helpers/Utils/SerializeFormData';
import {useSignInUpMutation} from '../../Redux/api';
import DB, {User} from '../../Helpers/Utils/LocalDB';
import {useTypedDispatch} from '../../Helpers/Hooks/useTypedDispatch';
import {signInUp} from '../../Redux/Slices/AuthSlice';
import Button from '../../Components/Button/Button';

const SignInUp = () => {
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();
    const [signInUpUser] = useSignInUpMutation();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const serializedFormData = serializeFormData(formData) as User;

        try {
            await signInUpUser(serializedFormData).unwrap();
        } catch (e) {
            // ALWAYS WILL CATCH ERROR
            const user = DB.findUserByEmail(serializedFormData.email);
            const isUserExists = user !== undefined;

            if (!isUserExists) {
                DB.addUser(serializedFormData)
            } else if (user.password !== serializedFormData.password) {
                alert('Password is incorrect');
                return;
            }

            dispatch(signInUp({
                email: serializedFormData.email,
                newUser: !isUserExists
            }));

            navigate('/')
        }
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input required={true} label="Email address" type="email" name="email"></Input>
                <Input required={true} label="Password" type="password" name="password"></Input>
                <Button type="submit" text="Sign in/up"/>
            </form>
        </>
    )
}

export default SignInUp;
