import React from 'react';



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

};


ProgressBar.propTypes = {

};


export default ProgressBar;
