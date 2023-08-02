import React, { useState } from 'react';
import Button from './Button';

const FlashCard = ({ headers, textArray, onLastCard, button }) => {
  const styles = {
    cardContainer: 'border rounded p-4 bg-white shadow-md',
    headers: 'font-bold',
  };

  const [show, setShow] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const arrayLength = textArray.length;

  const handleNextCard = () => {
    if (currentIndex === (arrayLength - 1)) {
      onLastCard(true);
      setShow(false);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className={styles.cardContainer}>
      <h4 className={styles.headers}>{headers[currentIndex]}</h4>
      <p className='mb-4'>{textArray[currentIndex]}</p>

      {show && <Button onClick={handleNextCard} message={button} />}
    </div>
  );
};

FlashCard.defaultProps = {
  headers: ['1', '2'],
  textArray: ['1', '2'],
  onLastCard: false,
  button: 'Next',
};

export default FlashCard;
