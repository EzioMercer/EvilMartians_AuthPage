import React, {useEffect} from 'react';
import {useTypedSelector} from '../../Helpers/Hooks/useTypedSelector';
import {useNavigate} from 'react-router-dom';
import {useTypedDispatch} from '../../Helpers/Hooks/useTypedDispatch';
import {signOut} from '../../Redux/Slices/AuthSlice';
import Button from '../../Components/Button/Button';

const Welcome = () => {
	const navigate = useNavigate();
	const dispatch = useTypedDispatch();
	const authData = useTypedSelector(state => state).auth;

	const handleClick = () => {
		dispatch(signOut());
	}

	useEffect(() => {
		if (!authData.authenticated) navigate('/sign-in-up');
	}, [authData.authenticated])

	return (
		<>
			<h1>Welcome {authData.newUser ? '' : 'back'} user {authData.email}</h1>
			<Button text="Sign out" handleClick={handleClick}/>
		</>
	)
}

export default Welcome;
