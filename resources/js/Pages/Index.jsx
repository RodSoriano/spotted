import React from 'react';
import Layout from './Layout';

import Alert from '../components/Alert';
import CustomLink from '../components/CustomLink';
import FooterLink from '../components/FooterLink';

const Index = ({ localeText, message }) => {
  return (
    <>
      {message && <Alert message={message} />}

      <div className='flex flex-col m-4 text-center p-4'>
        <CustomLink hrefProp={'/register'} message={localeText.register} />
        <CustomLink color={'bg-purple-600'} hrefProp={'/reservation'} message={localeText.book} />
        <CustomLink color={'bg-stone-700'} hrefProp={'/check-in'} message={localeText.checkIn} />
      </div>

      <div className='flex flex-col m-2 text-center'>
        <FooterLink text={localeText.footer} link={'/language'} click={localeText.click} />
      </div>
    </>
  );
};

Index.defaultProps = {
  localeText: [],
  message: false,
};

export default Index;

Index.layout = page => <Layout children={page} />;
