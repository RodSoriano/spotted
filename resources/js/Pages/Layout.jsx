import React from 'react';
import { Head } from '@inertiajs/inertia-react';

const Layout = ({ children }) => {
  const styles = {
    main: 'relative min-h-screen bg-gradient-to-br from-blue-500 to-red-500 flex flex-col items-center justify-center p-8',
    content: 'bg-white rounded-lg p-8 flex flex-col items-center justify-center',
  };

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Head>
          <title>Booking</title>
        </Head>
        {children}
      </div>
    </main>
  );
};

export default Layout;
