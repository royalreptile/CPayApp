import React from 'react';
import Input from './Input';
import Person from '../svg/person';

const classes = ["in-row"]
const Surfix = () => {
    return (
        <div className='col-12 surfix row enter-name-row-gap first-row-gap '>
            <Input placeHolder={"Last name"} childSvg={Person} classes={classes} />
            <select class="form-select" aria-label="Default select example">
                <option selected>surfix</option>
                <option value="1">mr</option>
                <option value="2">mrs</option>

            </select>
        </div>
    );
}

export default Surfix;
