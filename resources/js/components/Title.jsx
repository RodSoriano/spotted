import React from 'react';

const Title = ({ h1, paragraph }) => {
  const styles = {
    h1: 'text-xl font-bold mb-4 text-gray-800 flex items-center justify-center text-center',
    paragraph: 'mb-4 text-gray-800 flex items-center justify-center text-center',
  };

  return (
    <div>
      <h1 className={styles.h1}>{h1}</h1>
      {paragraph && <p className={styles.paragraph}>{paragraph}</p>}
    </div>
  );
};

export default Title;
