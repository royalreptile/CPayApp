import { useSelector, useDispatch } from "react-redux";
import { useState,useRef } from "react";

import { handleChange } from "../utils/handleChange";
import correctPhoneNumber from "../utils/correctPhoneNumber";
import { connectLogin } from "../features/login/LoginSlice";
import { toggle } from "../features/popup/popupSlice";

import handleBlur from "../utils/handleChange";
import TopBar from "../components/TopBar";
import Float from "../components/Float";
import Phone from "../svg/phone";
import React from 'react';
import Lock from "../svg/Lock";
import CustomButton from "../components/button";
import InfoIcon from "../svg/InfoIcon";
import Popup from "../components/popup";

const Login = () => {
    const dispatch = useDispatch()
    const { userName, loggedIn } = useSelector(connectLogin);
    console.log('User name ', userName, ' Loggedin ', loggedIn);
    const [number, updateNumber] = useState('');
    const [pin, updatePin] = useState('');
    const [rememberMe, updateRememberMe] = useState(false);
    const sanitizedNumber = useRef(correctPhoneNumber(number));
    console.log('Number ', number, ' Pin ', pin);
    const submit = (e) => {
        console.log(number ,' and ', pin)
        if (!number || !pin) {
            //updatePop
            dispatch(toggle())
        }
    }
    return (
        <div>
            <TopBar />
            <div className="container">


            <div className="lable">
                <span>
                    Welcome to Cpay App
                </span>
            </div>
            <div className="input-row">
                <span >
                    <Phone/>
                </span>
                <span className="form-span">

            <input type="text" maxLength="18" onChange={handleChange(correctPhoneNumber,sanitizedNumber)} placeholder="Mobile Number" className="form-control input-feild" onBlur={handleBlur(updateNumber)}></input>
                </span>
            </div>
            <div className="input-row">
                <span >
                    <Lock/>
                </span>
                <span className="form-span">

            <input type="password" maxLength="4" placeholder="Quick Access Pin" className="form-control input-feild" onBlur={handleBlur(updatePin)}></input>
                </span>
            </div>
            <div>
                <CustomButton click={submit} lable="Login"/>
            </div>

            <div className="remember-me">
                <span><input type="checkbox" onChange={handleBlur(updateRememberMe)}/></span>
                <span>Remember Me</span>
                <div className="forgot">
                    <span className="forgot-pin">         Forgot Pin</span>
                </div>
            </div>
            <div className="info-ico">
                <InfoIcon/>
            </div>
            </div>
            <Float />
            <Popup info={"Please Complete all required Fields"} />
        </div>
    );
}



export default Login;
