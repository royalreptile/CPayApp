import React from 'react';
import PropTypes from 'prop-types';


const ProgressBar = () => {
    return (
        <div className='progress-bar-main ' style={{}}>
            <div className='progress-custom'>
                <div className='twenty'></div>
                <div className='forty'></div>
                <div className='sixty'></div>
                <div className='eighty'></div>
                <div className='hundred'></div>
            </div>
            <div className='progress-bar' style={{ height: 4 }}>
                <div className='twenty'></div>
                <div className='forty'></div>
                <div className='sixty'></div>
                <div className='eighty'></div>
                <div className='hundred'></div>
            </div>
        </div>
    );
{ /**  return (
        <div class="progress mb-3 progress-bar-element" style={{height: 4}}>
            <div role="progressbar" aria-valuemin={0} aria-valuemax= {100}aria-valuenow={20} class="progress-bar" style={{width: 20}}></div>
        </div>
    )*/}
};


ProgressBar.propTypes = {

};


export default ProgressBar;
