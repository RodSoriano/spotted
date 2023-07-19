import React from "react";
import { Head, Link } from '@inertiajs/inertia-react';
import Layout from "./Layout";

export default function Index() {
  return (
    <>
      <Link
        href="/register"
        className="bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg mb-4 transform transition-transform hover:scale-105"
      >
        Register
      </Link>
      <Link
        href="/"
        className="bg-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg mb-4 transform transition-transform hover:scale-105"
      >
        Book a space
      </Link>
      <Link
        href="/"
        className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg mb-4 transform transition-transform hover:scale-105"
      >
        Check-in
      </Link>
    </>
  );
}

Index.layout = page => <Layout children={page} />
