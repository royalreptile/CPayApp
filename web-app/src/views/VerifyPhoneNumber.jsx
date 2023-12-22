import React,{useState} from 'react';
import PhoneFilledIcon from '../svg/PhoneFilledIcon';
import TopBar from '../components/TopBar';
import Float from '../components/Float';
import ProgressBar from '../components/ProgressBar';
import InfoIcon from '../svg/InfoIcon';
import Button from '../components/button';
import handleBlur from '../utils/handleChange';
import Popup from '../components/popup';
import { useNavigate } from 'react-router-dom';
import { toggle } from '../features/popup/popupSlice';
import { useDispatch } from 'react-redux';
import { TELLUSMORE } from '../utils/navigationRoutes';


const VerifyPhoneNumber = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [verificationCode, updateVerificationCode] = useState('');
    const [popupInfo, updatePopupInfo] = useState('')
    function submit(e) {
        if (!verificationCode || verificationCode.length < 6) {
            updatePopupInfo('Please enter a valid code');
            dispatch(toggle());
            return
        }
        navigate(TELLUSMORE);
    }


    return (
        <div className='verify-phone-number'>
            <TopBar />
            <div className="container">
                <ProgressBar/>
                <div className="info-icom">
                    <InfoIcon/>
                </div>
                <span className='phone-icon'><PhoneFilledIcon /></span>
                <span>
                    Enter text Message Verification Code
                </span>
                <span className='enter-code'><input type="text" onBlur={handleBlur(updateVerificationCode)} maxLength={6} placeholder='Enter Code'/></span>
                <Button lable='Verify' classes={['verify']} click={submit}/>
            </div>
            <span className='no-message'>Dint get text Message ?</span>
            <Float />
            <Popup info={popupInfo}/>
        </div>
    );
}

export default VerifyPhoneNumber;
