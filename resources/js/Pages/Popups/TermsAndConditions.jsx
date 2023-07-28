import React from 'react';
import Popup from 'reactjs-popup';
import Button from '../../components/Button';

import 'reactjs-popup/dist/index.css';

const TermsAndConditions = ({ onAccept, onDecline }) => {
  const styles = {
    popupBox: 'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50',
    box: 'w-2/3 bg-white rounded-md p-6 border border-gray-300 text-center',
    heading: 'text-2xl font-bold mb-4',
    content: 'text-lg mb-4',
    buttonsContainer: 'flex justify-center',
  };

  const handleDecline = () => {
    onDecline(false);
  };

  const handleAccept = () => {
    onAccept(true);
  };

  return (
    <Popup
      trigger={<Button message='Terms and Conditions' color='bg-purple-400' />}
      modal
      nested
      position='center center'
    >
      {(close) => (
        <div className={styles.popupBox}>
          <div className={styles.box}>
            <h2 className={styles.heading}>Terms and Conditions</h2>
            <div className={styles.content}>
              {/* terms and conditions */}
              By using this website, you agree to the terms and conditions.
            </div>
            <div className={styles.buttonsContainer}>
              <Button onClick={() => {
                handleDecline();
                close();
              }} message='Decline' color='bg-gray-600' />
              <Button onClick={() => {
                handleAccept();
                close();
              }} message='Accept' />
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default TermsAndConditions;
