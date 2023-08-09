import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import FlashCard from '../../components/FlashCard';
import Button from '../../components/Button';

import 'reactjs-popup/dist/index.css';

const TermsAndConditions = ({ onAccept, onDecline, localeText }) => {
  const styles = {
    popupBox: 'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50',
    box: 'w-3/4 bg-white rounded-md p-6 border border-gray-300 text-center',
    heading: 'text-2xl font-bold mb-4',
    content: 'text-m mb-4',
    buttonsContainer: 'flex justify-center',
  };

  const [accepted, setAccepted] = useState(false);

  const handleAcceptedAll = (accept) => {
    setAccepted(accept);
  };

  const handleDecline = () => {
    onDecline(false);
  };

  const handleAccept = () => {
    onAccept(true);
  };

  return (
    <Popup
      trigger={<Button message={localeText.popUp.show} color='bg-purple-600' />}
      modal
      nested
      position='center center'
    >
      {(close) => (
        <div className={styles.popupBox}>
          <div className={styles.box}>
            <h2 className={styles.heading}>{localeText.popUp.show}</h2>
            <div className={styles.content}>
              {<FlashCard onLastCard={handleAcceptedAll} headers={localeText.cards.headers} textArray={localeText.cards.texts} button={localeText.popUp.accept} />}
            </div>
            <div className={styles.buttonsContainer}>
              <Button onClick={() => {
                handleDecline();
                close();
              }} message={localeText.popUp.decline} color={'bg-stone-700'} />
              {accepted && <Button onClick={() => {
                handleAccept();
                close();
              }} message={localeText.popUp.accept} color={'bg-green-500'} />}
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

TermsAndConditions.defaultProps = {
  onAccept: () => { },
  onDecline: () => { },
  localeText: [],
};

export default TermsAndConditions;
