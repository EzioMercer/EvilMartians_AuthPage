import React from 'react';
import {Link} from 'react-router-dom';

const SignIn = () => {
    return (
        <>
            <Link to={'/sign-up'}>Sign Up</Link>
            <br/>
            <Link to={'/restore-password'}>Restore Password</Link>
        </>
    )
}

export default SignIn;
