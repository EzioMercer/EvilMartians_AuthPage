import React, {useEffect} from 'react';
import useTypedSelector from '../../Helpers/Hooks/useTypedSelector';
import {useNavigate} from 'react-router-dom';
import useTypedDispatch from '../../Helpers/Hooks/useTypedDispatch';
import {deleteUserData} from '../../Redux/Slices/UserDataSlice';
import Button from '../../Components/Button/Button';

const Welcome = () => {
	const navigate = useNavigate();
	const dispatch = useTypedDispatch();
	const userData = useTypedSelector(state => state).userData;

	const handleClick = () => {
		dispatch(deleteUserData());
	}

	useEffect(() => {
		if (userData.uid === null) navigate(`/${PROJECT_NAME}/sign-in`);
	}, [userData.uid])

	return (
		<>
			<h1>Welcome {userData.newUser ? '' : 'back'} user {userData.email}</h1>
			<Button text="Sign out" handleClick={handleClick}/>
		</>
	)
}

export default Welcome;
