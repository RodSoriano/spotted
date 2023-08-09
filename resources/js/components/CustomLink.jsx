import React from 'react';
import { Link as InertiaLink } from '@inertiajs/inertia-react';

const CustomLink = ({ color, hrefProp, message }) => {
  const styles = {
    link: `${color} text-white px-8 py-4 rounded-md font-bold text-lg mb-4 transform transition-transform hover:scale-105`,
  };

  return (
    <InertiaLink href={hrefProp} className={styles.link}>
      {message}
    </InertiaLink>
  );
};

CustomLink.defaultProps = {
  color: 'bg-teal-400',
  hrefProp: '/',
  message: '',
};

export default CustomLink;
