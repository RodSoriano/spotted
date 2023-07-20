import React from 'react';
import Layout from '../Layout';

export default function CheckIn() {
  return (
    <>
      Welcome to the check-in!
    </>
  );
}

CheckIn.layout = page => <Layout children={page} />;
