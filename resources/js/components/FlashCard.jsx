import React, { useState } from 'react';
import Button from './Button';

const FlashCard = ({ headers, textArray, onLastCard }) => {
  const styles = {
    cardContainer: 'border rounded p-4 bg-white shadow-md',
    headers: 'font-bold',
    text: 'text-lg mb-8',
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const arrayLength = textArray.length;

  const handleNextCard = () => {
    if (currentIndex !== textArray.length - 1) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % arrayLength);
    }

    onLastCard(true);
  };

  return (
    <div className={styles.cardContainer}>
      <h4 className={styles.headers}>{headers[currentIndex]}</h4>
      <p className={styles.text}>{textArray[currentIndex]}</p>

      {currentIndex !== (arrayLength - 1) && <Button onClick={handleNextCard} message={'Accept'} />}
    </div>
  );
};

FlashCard.defaultProps = {
  headers: ['1', '2'],
  textArray: ['1', '2'],
  onLastCard: false,
};

export default FlashCard;
