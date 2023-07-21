import React from 'react';

const Button = ({ type, message }) => {
  const styles = {
    button: 'bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300'
  };

  return (
    <button type={type} className={styles.button}>
      {message}
    </button>
  );
};

export default Button;
