import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Lable from '../components/Lable';
import Input from '../components/Input';
import Person from '../svg/person';
import Button from '../components/button';
import Float from '../components/Float';
import SelectBirthDay from '../components/SelectBirthDay';
import LocationIcon from '../svg/LocationIcon'
import AppartmentIcon from '../svg/AppartmentIcon';
import Popup from '../components/popup';
import handleBlur from '../utils/handleChange';
import { useDispatch } from 'react-redux';
import { toggle } from '../features/popup/popupSlice';
import { useNavigate } from 'react-router-dom';
import { VERIFYAGE } from '../utils/navigationRoutes';

const TellusMore = () => {
    const dispatch = useDispatch();
    const [email, updateEmail] = useState('');
    const [year, updateYear] = useState('');
    const [month, updateMonth] = useState('');
    const [day, updateDay] = useState('');
    const [homeAddress, updateHomeAddress] = useState('');
    const [apartmentUnit, updateApartmentUnit] = useState('');
    const [popupInfo, updatePopupInfo] = useState('');
    const navigate = useNavigate()
    function submit(e) {
        // if (!await isValidEmail('someone@gmail.com')) {
        //     alert('Please correct your email: ' + getLastInvalidText());
        // }
        if (!email) {
            updatePopupInfo('Please provide a valid email');
            dispatch(toggle());
            return
        }
        if (!month || !year || !day) {
            updatePopupInfo(`Please provide a valid ${!month ? 'month' : !year ? 'year' : 'day'}`);
            dispatch(toggle());
            return
        }
            
        if (!homeAddress) {
            updatePopupInfo('No home address provided');
            dispatch(toggle());
            return
        }
        if (!apartmentUnit) {
            updatePopupInfo('No apartment unit provided');
            dispatch(toggle());
            return
        }
        navigate(VERIFYAGE);
    }
    return (
        <div>
            <TopBar />
            <div className="container">

                <Lable firstLine='Tell us a bit more' secondLine='about your self' />
                
                <Input onBlur={handleBlur(updateEmail)} childSvg={Person} placeHolder={"Email"}/>
                <div className="date-of-birth-text">
                    <span>Date of Birth</span>
                </div>
                <SelectBirthDay handleDayChange={handleBlur(updateDay)} handleMonthChange={handleBlur(updateMonth)} handleYearChange={handleBlur(updateYear)}/>
                <Input childSvg={LocationIcon} placeHolder={"Home Address"}  onBlur={handleBlur(updateHomeAddress)}/>
                <Input childSvg={AppartmentIcon} placeHolder={"Apartment Unit #"} onBlur={handleBlur(updateApartmentUnit)}/>
                <div className="tell-us-more-button">
                    <Button click={submit} lable='Next'/>
                </div>
                <Float />
                <Popup info={popupInfo}/>
            </div>
        </div>
    );
}

export default TellusMore;
