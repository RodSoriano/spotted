import React from 'react';

const Button = ({ type, message, color }) => {
  const styles = {
    button: `${color} text-white py-2 px-4 rounded-full font-bold text-lg mb-4 transform transition-transform hover:scale-105`
  };

  return (
    <button className={styles.button} type={type}>
      {message}
    </button>
  );
};

Button.defaultProps = {
  color: 'bg-blue-500',
};

export default Button;
