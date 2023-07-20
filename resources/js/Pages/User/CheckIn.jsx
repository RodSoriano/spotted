import React from 'react';
import Layout from '../Layout';

const CheckIn = () => {
  return (
    <>
      Welcome to the check-in!
    </>
  );
}

export default CheckIn;

CheckIn.layout = page => <Layout children={page} />;
