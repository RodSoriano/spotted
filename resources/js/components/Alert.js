import React, { useState } from 'react';

const Alert = ({ message }) => {
  const styles = {
    container: 'alert bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 m-4 rounded-lg',
    closeButton: 'closebtn float-right cursor-pointer',
  };

  const [isHidden, setIsHidden] = useState(false);

  const selectMessage = (message) => {
    return typeof message === 'string' ? message : errorsDisplay(message);
  };

  const errorsDisplay = (errors) => {
    return errors.map((error, index) => error[1]).join('\n');
  };

  const hideAlert = () => {
    setIsHidden(true);
  };

  return isHidden ? null : (
    <div className={styles.container} role="alert">
      <span className={styles.closeButton} onClick={hideAlert}>
        &times;
      </span>
      {selectMessage(message)}
    </div>
  );
};

export default Alert;
