import React from 'react';



const Input = ({childSvg,placeHolder,classes=[]}) => {
    return  (
        <div class={"row enter-name-row-gap first-row-gap " + classes.join(" ")}>
            <div class="col-12">
                <div class="input-group">
                    <span class="input-group-addon">
                    {childSvg()}
            </span>
                <input type="text" maxlength="50" placeholder={placeHolder} class="form-control input-feild"></input>
            </div>
            </div>
        </div>

    );
  
};



export default Input;
