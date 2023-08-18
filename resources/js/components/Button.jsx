import React from 'react';

const Button = React.forwardRef(({ type, message, loading, color, onClick }, innerRef) => {
  const buttonClass = `${color} text-white py-2 px-4 rounded-md font-bold text-lg mb-4 mx-2 transform transition-transform hover:scale-105 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`;

  return (
    <button className={buttonClass} type={type} onClick={onClick} disabled={loading}>
      {loading ? <div className="w-5 h-5 border-t-4 border-teal-400 border-solid rounded-full animate-spin" /> : message}
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
