import React from 'react';
import FourDigitInput from '../components/FourDigitInput';
import Float from '../components/Float';
import { Link } from 'react-router-dom';

const EnterLastFourDigits = () => {
    return (
        <div className='container create-pin'>
            <h1>Enter the last four digits of your <br />Social Security Number</h1>
            <p> </p>
            <p className='pin-lable'>Last four digits</p>
            <FourDigitInput focus={ true} />
            <p className='pin-lable'>Re-enter 4 last 4 digits</p>
            <FourDigitInput />
            <Link>
            <p className='having-trouble'>Having trouble entering your SSN?</p>
            </Link>
            <Float/>
        </div>
    );
}

export default EnterLastFourDigits;
