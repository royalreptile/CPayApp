import React from 'react';
import { useState,useRef } from 'react';
import TopBar from '../components/TopBar';
import ProgressBar from '../components/ProgressBar';
import Lable from '../components/Lable';
import Input from '../components/Input';
import Person from '../svg/person';
import Phone from '../svg/phone';
import Surfix from '../components/Surfix';
import Button from '../components/button';
import ConfirmTerms from '../components/ConfirmTerms';
import Float from '../components/Float';
import handleBlur from '../utils/handleChange';
import correctPhoneNumber from '../utils/correctPhoneNumber';
import { handleChange } from '../utils/handleChange';
import Popup from '../components/popup';
import { toggle } from '../features/popup/popupSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { VERIFYPHONENUMBER } from '../utils/navigationRoutes';

const SignUpHome = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [firstName, updateFirstName] = useState('');
    const [middleName, updateMiddleName] = useState('');
    const [lastName, updateLastName] = useState('');
    const [number, updateNumber] = useState('');
    const [surfix, updateSurfix] = useState('');
    const [confirmTerms, updateConfirmTerms] = useState('')
    const[ popupInfo ,updatePopupInfo]= useState('')
    const sanitizedNumber = useRef(correctPhoneNumber(number));

    function handleCheckBoxChange(e) {
        updateConfirmTerms(!confirmTerms)
        return handleBlur((value)=>{})
    }

    function submit(e) {

        if (!firstName || firstName.length < 3 || !(/^[A-Za-z]+$/.test(firstName))) {
            updatePopupInfo('Please Share a valid first name')
            dispatch(toggle())
            return
        }
        if (!lastName || lastName.length < 3 || !(/^[A-Za-z]+$/.test(lastName))) {
            updatePopupInfo('Please Share a valid last name')
            dispatch(toggle())
            return
        }
        if (!surfix || surfix === '0') {
            updatePopupInfo('Please choose surfix');
            dispatch(toggle())
            return
        }
        if (!confirmTerms) {
            updatePopupInfo('Please agree to the terms of service');
            dispatch(toggle())
            return
        }
        navigate(VERIFYPHONENUMBER)

    }

    return (
        <div className='home wrapper'>
            <TopBar />
            <div>
            <div className='container'>
            <ProgressBar />
                    <Lable />
                    <Input onBlur={handleBlur(updateFirstName)} childSvg={Person} placeHolder={'First Name'} />
                    <Input onBlur={handleBlur(updateMiddleName)} childSvg={Person} placeHolder={'Middle Name'} />
                    <Surfix onBlur={handleBlur(updateLastName)} onSet={handleBlur(updateSurfix) } />
                    <Input childSvg={Phone} placeHolder={'Mobile Number'} onChange={handleChange(correctPhoneNumber,sanitizedNumber)} />
                    <ConfirmTerms onChange={handleCheckBoxChange}/>
                    <Button click={submit}/>
                    <Float />
                    <Popup info={popupInfo}/>
            </div>
            </div>
        </div>
    );
};


SignUpHome.propTypes = {

};


export default SignUpHome;
