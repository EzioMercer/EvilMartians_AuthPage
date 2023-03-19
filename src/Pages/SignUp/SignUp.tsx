import React from 'react';
import {Link} from 'react-router-dom';

const SignUp = () => {
    return (
        <>
            <Link to={'/sign-in'}>Sign In</Link>
            <br/>
            <Link to={'/restore-password'}>Restore Password</Link>
        </>
    )
}

export default SignUp;
