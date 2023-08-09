import React from 'react';
import { Head } from '@inertiajs/inertia-react';

const Layout = ({ children }) => {
  const styles = {
    main: 'overflow-x-hidden relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-4',
    content: 'bg-zinc-100 rounded-lg p-8 flex flex-col items-center justify-center',
  };

  return (
    <main
      className={styles.main}
      style={{ backgroundImage: `url('/images/test.jpg')` }}
    >
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
