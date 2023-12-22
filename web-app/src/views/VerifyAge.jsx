import React from 'react';
import Button from '../components/button';
import ConfirmAge from '../svg/ConfirmAge';
import { useNavigate } from 'react-router-dom';
import { ENTERLASTFOURDIGITS } from '../utils/navigationRoutes';

const VerifyAge = () => {
    const navigate = useNavigate();
    function submit(e) {
        return navigate(ENTERLASTFOURDIGITS);
    }
    return (
        <div className='verify-age'>
            <div className="header"><span>Verify Your Age</span></div>
            <div className="detail"><span>This website contains Information on an adult-use Cannabis Dispensary and is only intended to be viewed by those over the age of 21 and for use only by qualified patients.</span></div>
            <div className="twenty-one">
                <span>21</span>
            </div>
            <div className="verify-age-icon">
                <ConfirmAge/>
            </div>
            <Button lable='Verify' classes={["verify-age-button"]} click={submit}/>
        </div>
    );
}

export default VerifyAge;
