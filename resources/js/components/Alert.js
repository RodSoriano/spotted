import React from 'react';

const Alert = () => {
  const styles = {
    container: 'alert bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 m-4 rounded-lg',
    closeBtn: 'closebtn float-right cursor-pointer',
  };

  const hideAlert = () => {
    document.querySelector(`.${styles.container}`).style.display = 'none';
  };

  return (
    <div className={styles.container} role="alert">
      <span className={styles.closeBtn} onClick={hideAlert}>
        &times;
      </span>
      This is an alert box.
    </div>
  );
};

export default Alert;
