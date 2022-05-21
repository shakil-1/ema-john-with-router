import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [error, serError] = useState('');



    const handelEmailBlur = event => {
        setEmail(event.target.value)

    }
    const handelpasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handelConfirmpassword = event => {
        setConfirmpassword(event.target.value)
    }


    const handelFormSubmit = event => {
        event.preventDefault();
    }

    return (
        <div className='form-container'>

            <div>
                <h1>Login</h1>
                <form onSubmit={handelFormSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handelEmailBlur} type="email" name="email" placeholder='enter your email' required id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handelpasswordBlur} type="password" name="password" placeholder='password' required id="" />
                    </div>
                    <input  className='form-submit' type="submit" value="Login" />
                </form>
                <p>New to Ema-john? <Link to="/signup">Create New Account</Link></p>
            </div>
        </div>
    );
};

export default Login;