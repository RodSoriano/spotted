import React from 'react';
import { Head } from '@inertiajs/inertia-react';

const Layout = ({ children }) => {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-500 to-red-500 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg p-8 flex flex-col items-center justify-center">
        <Head>
          <title>Booking</title>
        </Head>

        {children}
      </div>
    </main>
  );
}

export default Layout;
