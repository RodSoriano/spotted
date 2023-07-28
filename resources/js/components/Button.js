import React from 'react';

const Button = ({ type, message, color, onClick }) => {
  const buttonClass = `${color} text-white py-2 px-4 rounded-full font-bold text-lg mb-4 mx-4 transform transition-transform hover:scale-105`;

  return (
    <button className={buttonClass} type={type} onClick={onClick}>
      {message}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  message: '',
  color: 'bg-blue-500',
  onClick: () => { },
};

export default Button;
