import React from 'react';
import InfoIcon from "../svg/InfoIcon"

const Lable = ({firstLine="Set Up Your",secondLine="CPAY Account"}) => {
    return (
        <div className='lable-div'>
            <div className='row'>
            <div className="col-12 info">
                <InfoIcon/>
  </div>
            </div>
        <div className='row'>
        <div className='col-3'></div>
            <div className='label col-6'>
                    <span>{firstLine} <br /> {secondLine}</span>
            </div>
            <div className='col-3'></div>
        </div>
        </div>
    );
};


Lable.propTypes = {

};


export default Lable;
