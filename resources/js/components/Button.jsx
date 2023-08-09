import React from 'react';

const Button = React.forwardRef(({ type, message, color, onClick }, innerRef) => {
  const buttonClass = `${color} text-white py-2 px-4 rounded-md font-bold text-lg mb-4 mx-2 transform transition-transform hover:scale-105`;

  return (
    <button className={buttonClass} type={type} onClick={onClick}>
      {message}
    </button>
  );
});

Button.defaultProps = {
  type: 'button',
  message: '',
  color: 'bg-teal-400',
  onClick: () => { },
};

export default Button;
