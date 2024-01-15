import React from 'react';
import cpaylogo from '../assets/cpay-logo.png';
import Button from '../components/button';
import Float from '../components/Float';
import { Link } from 'react-router-dom';
import { SIGNUP, LOGIN } from '../utils/navigationRoutes';

const GetStarted = () => {
    return (
        <div className='welcome'>
            <div className='logo-image'><img src={ cpaylogo} alt='cpay logo' /></div>
            <div className='lable'><span >
The easy way to pay at 700+<br/>
                stores and websites.</span></div>
            <div>
                <div className='button-row'>
                    <div>
                        <Link to= {LOGIN}>
                        <Button lable='Sign In' />
                        </Link>
                    </div>
                    <div>
                        <Link to={SIGNUP}>
                        <Button lable='Sign Up' classes={["light-blue"]}/>
                        </Link>
                    </div>
            </div>
            <div></div>
            </div>
            <Float/>
        </div>
    );
}

export default GetStarted;
