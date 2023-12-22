import React from 'react';

const EnrollingInCpay = () => {
    return (
        <div className='container enrolling'>
            <div className="enrolling-header"><span>Enrolling in CPay is Quick, Easy, And Secure.</span></div>
            <div className="point">
                <span>{"1.) Vist Website and Enroll in the program by setting up your account"}</span>
                <span>Here is what you will need to setup your Cpay account:</span>
            </div>
                <div>
                    <ul>
                        <li>A valid driver's license </li>
                        <li>A checking account</li>
                        <li>A working email address</li>
                    </ul>
                </div>
            <div className="point">
                <span>{"2.) Once your account is setup you can download the secure app at cpay.app for both apple and android devices"}</span>
            </div>
        </div>
    );
}

export default EnrollingInCpay;
