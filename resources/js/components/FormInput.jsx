import React from 'react';
import Label from './Label';

const FormInput = ({ inputLabel, inputValue, onChangeEvent }) => {
  const styles = {
    container: 'mb-4',
    input: 'mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500',
  };

  return (
    <div className={styles.container}>
      <Label labelName={inputLabel} />
      <input
        className={styles.input}
        type='text'
        name={inputLabel}
        value={inputValue}
        onChange={onChangeEvent}
      />
    </div>
  );
};

export default FormInput;
