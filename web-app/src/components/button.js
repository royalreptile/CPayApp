import React from 'react';

const CustomButton = ({ classes = [], lable = "Next" ,click={}}) => {
    
    return (
        <div className={`button-next ${classes.join(" ")}`}>
            <button onClick={click} ><span>{ lable}</span></button>
        </div>
    );
}

export default CustomButton;
