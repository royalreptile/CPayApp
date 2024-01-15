import React from 'react';



const Input = ({ childSvg, placeHolder, classes = [], onChange = () => { }, onBlur = () => { }, value = "" }) => {
    let inputPart =
        value
        ?
            (<input type="text" maxLength="50" placeholder={placeHolder} className="form-control input-feild" onChange={onChange} onBlur={onBlur} value={value}></input>)
            :
        (<input type="text" maxLength="50" placeholder={placeHolder} className="form-control input-feild" onChange={onChange} onBlur={onBlur}></input>)
    return  (
        <div className={"row enter-name-row-gap first-row-gap " + classes.join(" ")}>
            <div className="col-12">
                <div className="input-group">
                    <span className="input-group-addon">
                    {childSvg()}
                    </span>
                
            {inputPart}
            </div>
            </div>
        </div>

    );
  
};



export default Input;
