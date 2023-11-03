import React from 'react';
import '../../Watch/SignUp.css';

function SignUp(props) {
    return (
        <div className='signUpContainer'>
            <button onClick={props.login}>
                Sign Up
            </button>
            <button>
                Sign In
            </button>
        </div>
    )
}

export default SignUp