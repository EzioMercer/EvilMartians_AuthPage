import React from 'react';
import {Link} from 'react-router-dom';

const RestorePassword = () => {
    return (
        <>
            <Link to={'/sign-in'}>Sign In</Link>
            <br/>
            <Link to={'/sign-up'}>Sign Up</Link>
        </>
    )
}

export default RestorePassword;
