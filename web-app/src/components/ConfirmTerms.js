import React from 'react';

const ConfirmTerms = ({onChange}) => {
 
    return (
        <div className='confirm-terms'>
            <span className='check'>
                <input type='checkbox' id='terms' name='terms' onChange={onChange}></input>
            </span>
            <span>
                I have read and agreed to the <span>Terms of Service End User License Agreement </span>and <span>
                Privacy Policy</span>
            </span>
        </div>
    );
}

export default ConfirmTerms;
