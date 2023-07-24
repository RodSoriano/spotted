import React from 'react';

const Button = ({ type, message }) => {
  const styles = {
    button: 'bg-blue-500 text-white py-2 px-4 rounded-full font-bold text-lg mb-4 transform transition-transform hover:scale-105'
  };

  return (
    <button type={type} className={styles.button}>
      {message}
    </button>
  );
};

export default Button;
