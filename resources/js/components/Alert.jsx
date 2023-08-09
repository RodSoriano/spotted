import React, { useState } from 'react';

const Alert = ({ message, containerColor, borderColor, textColor }) => {
  const styles = {
    container: `alert ${containerColor} border-l-4 ${borderColor} ${textColor} px-5 pb-4 m-4 w-full`,
    closeButton: 'closebtn flex justify-end cursor-pointer mt-1',
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

  return !isHidden && (
    <div className={styles.container} role='alert'>
      <span className={styles.closeButton} onClick={hideAlert}>
        &times;
      </span>
      {selectMessage(message)}
    </div>
  );
};

Alert.defaultProps = {
  message: '',
  containerColor: 'bg-blue-100',
  borderColor: 'border-blue-500',
  textColor: 'text-blue-700',
};

export default Alert;
