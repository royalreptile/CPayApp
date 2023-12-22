import React from 'react';
import FourDigitInput from '../components/FourDigitInput';
import Float from '../components/Float';
import { Link } from 'react-router-dom';

const CreatePin = () => {
    return (
        <div className='container create-pin'>
            <h1>Create your 4-digit <br />Quick Access PIN</h1>
            <p>Your PIN is a quick and secure way to<br/>sign in your CanPay account</p>
            <p className='pin-lable'>Please enter a 4 digit Pin</p>
            <FourDigitInput />
            <p className='pin-lable'>Re-enter 4 digit PIN</p>
            <FourDigitInput />
            <Link>
            <p className='having-trouble'>Having trouble entering PIN?</p>
            </Link>
            <Float/>
        </div>
    );
}

export default CreatePin;
