import React from 'react';

const SelectBirthDay = ({handleMonthChange, handleYearChange, handleDayChange}) => {
    return (
        <div className='select-birth-day'>
            <div className="month">
            <select className="form-select" aria-label="Choose Month" onChange={handleMonthChange}>
                <option value={'0'}>Month</option>
                <option value="1">January</option>
                <option value="2">Febuary</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>


            </select>
            </div>
            <div className="day">           
            <input type='text' placeholder='Day' onChange={handleDayChange}/>
            </div>
            <div className="year">
            <input type='text' placeholder='Year' onChange={handleYearChange}/>
            </div>
        </div>
    );
}

export default SelectBirthDay;
