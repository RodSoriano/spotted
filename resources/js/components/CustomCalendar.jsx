import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomCalendar = ({ inputLabel, selectedDate, onDateChange }) => {
  return (
    <div className="flex flex-col items-start">
      <label htmlFor={inputLabel} className="text-gray-800 font-medium mb-2">
        {inputLabel}
      </label>
      <div className="flex justify-center">
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
  );
};

export default CustomCalendar;
