import React from 'react';

const Label = ({ labelName }) => {
  const styles = {
    label: 'text-gray-800 font-medium',
  };

  return (
    <label htmlFor={labelName} className={styles.label}>
      {labelName}
    </label>
  );
};

export default Label;
