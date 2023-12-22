import React from 'react';
import cpaylog from '../assets/cpay-logo.png';
import plane from '../assets/plane.png';
import Button from '../components/button';
import Float from '../components/Float';
import { Link } from 'react-router-dom';
import { GETSTARTED } from '../utils/navigationRoutes';

const Welcome = () => {
    console.log('GET STARTED: ',GETSTARTED)
    return (
        <div className='welcome'>
            <div className='logo'>
                <div><img src={cpaylog} /></div>
            </div >
            <div className='plane'><img src={plane} /></div>
            <div className='lable'><span>Sign up for the new <br/> Cpay App</span></div>
            <div className='get-started'><Link to={GETSTARTED}>
                <Button classes={["light-blue"]} lable='Get Started' />
                </Link>
            </div>
            <Float/>
        </div>
    );
}

export default Welcome;
