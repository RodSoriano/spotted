import React from "react";
import { Head, Link } from '@inertiajs/inertia-react';

export default function Index() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <Head>
        <title>Booking</title>
      </Head>

      <Link
        href="/"
        className="bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg mb-4 transform transition-transform hover:scale-105"
      >
        Register
      </Link>
      <Link
        href="/"
        className="bg-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg mb-4 transform transition-transform hover:scale-105"
      >
        Book your space
      </Link>
      <Link
        href="/"
        className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg mb-4 transform transition-transform hover:scale-105"
      >
        Check-in
      </Link>
    </div>
  );
}
