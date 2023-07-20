import React from 'react';
import Layout from '../Layout';

export default function Reservations() {
  return (
    <>
      Welcome to the reservations page!
    </>
  );
}

Reservations.layout = page => <Layout children={page} />;
