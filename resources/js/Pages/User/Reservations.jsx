import React from 'react';
import Layout from '../Layout';

const Reservations = () => {
  return (
    <>
      Welcome to the reservations page!
    </>
  );
}

export default Reservations;

Reservations.layout = page => <Layout children={page} />;
