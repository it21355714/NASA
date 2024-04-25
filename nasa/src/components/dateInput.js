import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = (props) => (
  <div className="text-center"  style={{ paddingTop: '60px' }}>
   <p className='text-m text-white pr-2 font-bold mb-1' style={{ fontSize: '1.5em' }}>Select a day</p>

    <DatePicker
      wrapperClassName="date-picker"
      className="form-control text-black focus:outline-none"
      selected={props.date}
      onChange={props.changeDate}
    />
    <div></div>
  </div>
);

export default DateInput;
