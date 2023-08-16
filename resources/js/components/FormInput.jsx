import React from 'react';
import Label from './Label';

const FormInput = ({ inputLabel, inputValue, onChangeEvent, placeHolderProp }) => {
  const styles = {
    container: 'mb-4',
    input: 'mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-400 w-2/3',
  };

  return (
    <div className={styles.container}>
      <Label labelName={inputLabel} /><br />
      <input
        className={styles.input}
        type='text'
        name={inputLabel}
        value={inputValue}
        onChange={onChangeEvent}
        placeholder={placeHolderProp}
        required
      />
    </div>
  );
};

export default FormInput;
