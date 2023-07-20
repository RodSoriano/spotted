import React from 'react';

const Label = ({ labelName }) => {
  return (
    <label
      htmlFor={labelName}
      className="text-gray-800 font-medium"
    >
      {labelName}
    </label>
  );
};

export default Label;
