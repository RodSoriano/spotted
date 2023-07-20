import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CustomCalendar({ ...args }) {
  const [selectedDate, setSelectedDate] = args;

  return (
    <div className="card flex justify-center items-center bg-white rounded-lg shadow-lg p-4">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        showYearDropdown
        showMonthDropdown
        dropdownMode="select"
        popperClassName="z-50"
        className="border rounded-lg p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        calendarClassName="bg-white shadow-lg rounded-lg p-4"
      />
    </div>
  );
}
