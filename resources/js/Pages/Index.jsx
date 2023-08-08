import React from 'react';
import Layout from './Layout';

import CustomLink from '../components/CustomLink';
import Alert from '../components/Alert';
import FooterLink from '../components/FooterLink';

const Index = ({ localeText, message }) => {

  return (
    <>
      {message && <Alert message={message} />}

      <CustomLink hrefProp={'/register'} message={localeText.register} />

      <CustomLink color={'bg-purple-500'} hrefProp={'/reservation'} message={localeText.book} />

      <CustomLink color={'bg-green-500'} hrefProp={'/check-in'} message={localeText.checkIn} />

      <FooterLink text={localeText.footer} link={'/language'} click={localeText.click} />
    </>
  );
};

Index.defaultProps = {
  localeText: [],
  message: false,
};

export default Index;

Index.layout = page => <Layout children={page} />;
