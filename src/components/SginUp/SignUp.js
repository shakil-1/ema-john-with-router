
import { Link, useNavigate } from 'react-router-dom';
import './SginUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init'
import { useState } from 'react';


const SginUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);


    const handelEmailBlur = event => {
        setEmail(event.target.value)

    }
    const handelpasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handelConfirmpassword = event => {
        setConfirmpassword(event.target.value)
    }

    if (user) {
        navigate('/shop')
    }
    const handelSignupSubmit = event => {
        event.preventDefault();
        if (password !== confirmpassword) {
            setError('You Tow password did not match')
            return;
        }

        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>

            <div>
                <h1>SignUp</h1>
                <form onSubmit={handelSignupSubmit}>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handelEmailBlur} type="email" name="email" placeholder='enter your email' required id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handelpasswordBlur} type="password" name="password" placeholder='password' required id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handelConfirmpassword} type="password" name="confirm-password" placeholder='confirm password' required id="" />
                    </div>
                    <p>{error}</p>
                    <input className='form-submit' type="submit" value="SignUp" />
                </form>
                <p>Already have an account?<Link to="/login"> Login</Link></p>
            </div>
        </div>
    );
};

export default SginUp;