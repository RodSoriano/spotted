import React from 'react';
import Layout from './Layout';

import CustomLink from '../components/CustomLink';
import Alert from '../components/Alert';

const Index = ({ message }) => {

  return (
    <>
      {message && <Alert message={message} />}

      <CustomLink hrefProp={'/register'} message={'Register'} />

      <CustomLink color={'bg-purple-500'} hrefProp={'/reservation'} message={'Book a Space'} />

      <CustomLink color={'bg-green-500'} hrefProp={'/check-in'} message={'Check In'} />
    </>
  );
};

Index.defaultProps = {
  message: false
};

export default Index;

Index.layout = page => <Layout children={page} />;
