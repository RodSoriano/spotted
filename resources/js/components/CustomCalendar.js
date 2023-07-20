import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Label from './Label';

const CustomCalendar = ({ inputLabel, selectedDate, onDateChange }) => {
  return (
    <>
      <div className="flex flex-col items-start">
        <Label labelName={inputLabel} />
        <div className="flex justify-center mb-4">
          <DatePicker
            selected={selectedDate}
            onChange={onDateChange}
            showYearDropdown
            showMonthDropdown
            dropdownMode="select"
            popperClassName="z-50"
            className="border rounded-lg p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            calendarClassName="bg-white shadow-lg rounded-lg p-4"
          />
        </div>
      </div>
    </>
  );
};

export default CustomCalendar;
