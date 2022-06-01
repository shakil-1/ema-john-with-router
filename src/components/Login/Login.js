import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pthname || '/';

    const handelEmailBlur = event => {
        setEmail(event.target.value)

    }
    const handelpasswordBlur = event => {
        setPassword(event.target.value)
    }
    if (user) {
        navigate(from, {replace: true});
    }
    const handelFormSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
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
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loding.....</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>New to Ema-john? <Link to="/signup">Create New Account</Link></p>
            </div>
        </div>
    );
};

export default Login;