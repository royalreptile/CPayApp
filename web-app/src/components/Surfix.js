import React from 'react';
import Input from './Input';
import Person from '../svg/person';

const classes = ["in-row"]
const Surfix = ({onBlur=(e)=>{},onSet,lastNameValue='',prefixValue='0'}) => {
    return (
        <div className='col-12 surfix row enter-name-row-gap first-row-gap '>
            <Input onBlur={onBlur} onChange={onBlur} placeHolder={"Last name"} childSvg={Person} classes={classes} value={lastNameValue} />
            <select className="form-select" aria-label="Choose gender" defaultChecked defaultValue={prefixValue} onChange={onSet} >
                <option value={'0'}>Prefix</option>
                <option value="1">Mr</option>
                <option value="2">Mrs</option>
                <option value="3">Miss</option>
                <option value="4">Dr</option>

            </select>
        </div>
    );
}

export default Surfix;
