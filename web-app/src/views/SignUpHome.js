import React from 'react';
import { useState,useRef,useEffect } from 'react';
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
import { saveSignUpScreeInfo ,SignUpScreenState} from '../features/signUp/SignUpSlice';
import { useSelector } from 'react-redux';

const SignUpHome = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signUpScreenState = useSelector(SignUpScreenState);
   
    const [firstName, updateFirstName] = useState(signUpScreenState.firstName);
    const [middleName, updateMiddleName] = useState(signUpScreenState.middleName);
    const [lastName, updateLastName] = useState(signUpScreenState.lastName);
    const [number, updateNumber] = useState("");
    const [surfix, updateSurfix] = useState(signUpScreenState.prefix);
    const [confirmTerms, updateConfirmTerms] = useState(signUpScreenState.agreedToTerms)
    const[ popupInfo ,updatePopupInfo]= useState('')
    const sanitizedNumber = useRef(correctPhoneNumber(number));


    // Update states Helpers
    function updateFirstNameHelper(name) {
        dispatch(saveSignUpScreeInfo({ ...signUpScreenState, firstName: name }))
        updateFirstName(name)
    }

    function updateMiddleNameHelper(name) {
        dispatch(saveSignUpScreeInfo({ ...signUpScreenState, middleName: name }));
        updateMiddleName(name);
    }

    function updateLastNameHelper(name) {
        dispatch(saveSignUpScreeInfo({ ...signUpScreenState, lastName: name }));
        updateLastName(name)
    }


    function updateNumberHelper(numberTo) {
        dispatch(saveSignUpScreeInfo({ ...signUpScreenState, mobileNumber: numberTo }));
        updateNumber(numberTo);
    }

    function updateSurfixHelper(fix) {
        dispatch(saveSignUpScreeInfo({ ...signUpScreenState, prefix: fix }));
        updateSurfix(fix)

    }


    // Listen to clicks
    function handleCheckBoxChange(e) {
        updateConfirmTerms(!confirmTerms)
        dispatch(saveSignUpScreeInfo({ ...signUpScreenState, agreedToTerms: !confirmTerms }));
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
    // End listen to clicks
    
    // Listen to State


    // Update State when unmount
    useEffect(() => {
        console.log('Component mounted');
        updateFirstName(signUpScreenState.firstName);
        updateConfirmTerms(signUpScreenState.agreedToTerms);
        updateMiddleName(signUpScreenState.middleName);
        updateLastName(signUpScreenState.lastName);
        updateNumber(signUpScreenState.mobileNumber)
        updateSurfix(signUpScreenState.prefix)
        sanitizedNumber.current = number
    
        // Cleanup function (runs on unmount)
        return () => {
        //   console.log('Component will unmount (cleanup),',{middleName:middleName,firstName,firstName,lastName:lastName,prefix:surfix,mobileNumber:number});
            // Perform cleanup or unsubscribe from resources
            // dispatch(saveSignUpScreeInfo({middleName:middleName,firstName,firstName,lastName:lastName,prefix:surfix,mobileNumber:number}))
        };
      }, [])
    

    return (
        <div className='home wrapper'>
            <TopBar />
            <div>
            <div className='container'>
            <ProgressBar />
                    <Lable />
                    {/** First name */}
                    <Input onBlur={handleBlur(updateFirstName)} onChange={handleBlur(updateFirstNameHelper)} childSvg={Person} placeHolder={'First Name'} value={firstName} />
                    
                    {/* Middle name */}
                    <Input onBlur={handleBlur(updateMiddleName)} onChange={handleBlur(updateMiddleNameHelper)} childSvg={Person} placeHolder={'Middle Name'} value={ middleName} />

                    {/* Surfix with LastName */}
                    <Surfix onBlur={handleBlur(updateLastNameHelper)} onSet={handleBlur(updateSurfixHelper)} lastNameValue={ lastName} prefixValue={surfix} />
                    
                    {/* Phone Number */}
                    <Input childSvg={Phone} placeHolder={'Mobile Number'} onChange={handleChange(correctPhoneNumber, sanitizedNumber,updateNumberHelper) } value={number} />
                    
                    {/* Terms */}
                    <ConfirmTerms onChange={handleCheckBoxChange} checked={confirmTerms} />
                    
                    {/* Submitt button */}
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
