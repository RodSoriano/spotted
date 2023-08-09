import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const FooterLink = ({ text, link, click }) => {
  const styles = {
    container: 'flex items-center text-center',
    link: 'text-blue-500 underline flex items-center justify-center',
  };

  return (
    <div className={styles.container}>
      <p>
        {text}
        <br />
        <Link className={styles.link} href={link}>
          {click}
        </Link>
      </p>
    </div>
  );
};

FooterLink.defaultProps = {
  text: '',
  link: '/',
  click: 'Click Here!',
};

export default FooterLink;
