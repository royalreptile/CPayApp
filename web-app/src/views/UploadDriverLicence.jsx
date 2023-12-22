import React from 'react';
import TopBar from '../components/TopBar';
import Float from '../components/Float';

const UploadDriverLicence = () => {
    return (
        <div className="">
            <TopBar/>
        <div className='upload-driver-licence'>
            <span>Thank You for registering with Cpay , <br/> its very important that we are able to <br/>validate every Cpay member.<br/>We are not able to verify your account.<br/>As next Step, Please take a photo of your Drivers License and upload and a representative will follow up with you<br/>to continue with your registration.</span>
         
            </div>
            <div className='file'>

            <input type="file"  name='file' accept='image/*' id='file' className='custom-file-input'/>
            </div>
            <Float/>
            </div>
    );
}

export default UploadDriverLicence;
