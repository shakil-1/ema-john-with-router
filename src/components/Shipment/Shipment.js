import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');


    const handelNameBlur = event => {
        setName(event.target.value)

    }
 
    const handelAddressBlur = event => {
        setAddress(event.target.value)
    }
    const handelPhoneBlur = event => {
        setPhone(event.target.value)
    }

    const handelSignupSubmit = event => {
        event.preventDefault();
        const shiping = {name, email, address, phone};
        console.log(shiping);

    }
    return (
        <div className='form-container'>

            <div>
                <h1>Shipping Information</h1>
                <form onSubmit={handelSignupSubmit}>

                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handelNameBlur} type="text" name="name" placeholder='enter your name' required id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" placeholder='enter your email' required id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handelAddressBlur} type="text" name="address" placeholder='enter your address' required id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone</label>
                        <input onBlur={handelPhoneBlur} type="text" name="phone" placeholder='enter your phone number' required id="" />
                    </div>
                    <p>{error}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
            </div>
        </div>
    );
};
export default Shipment;