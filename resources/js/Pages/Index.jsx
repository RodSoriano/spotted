import React from 'react';
import Layout from './Layout';

import CustomLink from '../components/CustomLink';
import Alert from '../components/Alert';
import { Link } from '@inertiajs/inertia-react';

const Index = ({ localeText, message }) => {

  return (
    <>
      {message && <Alert message={message} />}

      <CustomLink hrefProp={'/register'} message={localeText.buttons.register} />

      <CustomLink color={'bg-purple-500'} hrefProp={'/reservation'} message={localeText.buttons.book} />

      <CustomLink color={'bg-green-500'} hrefProp={'/check-in'} message={localeText.buttons.checkIn} />

      <div className='flex items-center'>
        <p>
          {localeText.localeSwitch}
          <Link className='text-blue-500 underline' href='/language'> {localeText.clickHere} </Link>
        </p>
      </div>
    </>
  );
};

Index.defaultProps = {
  localeText: '',
  message: false,
};

export default Index;

Index.layout = page => <Layout children={page} />;
