import React from 'react';
import { Link } from 'react-router-dom';
import { TERMSANDCONDITIONS } from '../utils/navigationRoutes';

const ConfirmTerms = ({ onChange ,checked = false }) => {
    
 
    return (
        <div className='confirm-terms'>
            <span className='check'>
                <input type='checkbox' id='terms' name='terms' onChange={onChange} checked={checked}></input>
            </span>
            <span>
            I have read and agree to the <Link to={TERMSANDCONDITIONS}>Terms and Conditions</Link>, <Link to = {TERMSANDCONDITIONS}>User Agreement</Link> and <Link to = {TERMSANDCONDITIONS}>Privacy Policy.</Link>
            </span>
        </div>
    );
}

export default ConfirmTerms;
