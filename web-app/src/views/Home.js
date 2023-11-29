import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../components/TopBar';
import ProgressBar from '../components/ProgressBar';
import Lable from '../components/Lable';
import Input from '../components/Input';
import Person from '../svg/person';
import Phone from '../svg/phone';
import Surfix from '../components/Surfix';


const Home = () => {
    return (
        <div className='home wrapper'>
            <TopBar />
            <div>
            <div className='container'>
            <ProgressBar />
                    <Lable />
                    <Input childSvg={Person} placeHolder={'First Name'} />
                    <Input childSvg={Person} placeHolder={'Middle Name'} />
                    <Surfix />
                    <Input childSvg={Phone} placeHolder={'Mobile Number'} />
            </div>
            </div>
        </div>
    );
};


Home.propTypes = {

};


export default Home;
