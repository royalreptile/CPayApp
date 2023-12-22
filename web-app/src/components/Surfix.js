import React from 'react';
import Input from './Input';
import Person from '../svg/person';

const classes = ["in-row"]
const Surfix = ({onBlur=(e)=>{},onSet}) => {
    return (
        <div className='col-12 surfix row enter-name-row-gap first-row-gap '>
            <Input onBlur={onBlur} placeHolder={"Last name"} childSvg={Person} classes={classes} />
            <select className="form-select" aria-label="Choose gender" defaultChecked defaultValue={'0'} onChange={onSet}>
                <option value={'0'}>surfix</option>
                <option value="1">mr</option>
                <option value="2">mrs</option>

            </select>
        </div>
    );
}

export default Surfix;
