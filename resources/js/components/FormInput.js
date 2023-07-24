import React from 'react';
import Label from './Label';

const FormInput = ({ inputLabel, inputValue, onChangeEvent }) => {
  return (
    <div className="mb-4">
      <Label labelName={inputLabel} />
      <input
        className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name={inputLabel}
        value={inputValue}
        onChange={onChangeEvent}
      />
    </div>
  );
};

export default FormInput;
