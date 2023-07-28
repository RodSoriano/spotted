import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Label from './Label';

const CustomCalendar = ({ inputLabel, selectedDate, onDateChange, min, max }) => {
  const styles = {
    container: 'flex flex-col items-start mb-4',
    datePickerContainer: 'flex justify-center',
    datePickerInput: 'border rounded-lg p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500',
    datePickerCalendar: 'bg-white shadow-lg rounded-lg p-4',
  };

  return (
    <div className={styles.container}>
      <Label labelName={inputLabel} />
      <div className={styles.datePickerContainer}>
        <DatePicker
          className={styles.datePickerInput}
          popperClassName='z-50'
          calendarClassName={styles.datePickerCalendar}
          dropdownMode='select'
          showMonthDropdown
          showYearDropdown
          selected={selectedDate}
          onChange={onDateChange}
          minDate={min}
          maxDate={max}
        />
      </div>
    </div>
  );
};

CustomCalendar.defaultProps = {
  selectedDate: new Date(),
  onDateChange: () => { },
  min: new Date('1950/01/01'),
  max: new Date(),
};

export default CustomCalendar;
