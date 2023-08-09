import React, { useState } from 'react';
import Layout from '../Layout';
import { Inertia } from '@inertiajs/inertia';

import Title from '../../components/Title';
import FormInput from '../../components/FormInput';
import FooterLink from '../../components/FooterLink';
import Alert from '../../components/Alert';
import Button from '../../components/Button';

const CheckIn = ({ localeText }) => {
  const styles = {
    container: 'flex items-center justify-center',
    reservationLink: 'text-teal-400 underline',
  };

  const [status, setStatus] = useState(false);
  const [errors, setErrors] = useState([]);

  const [email, setEmail] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (form) => {
    form.preventDefault();

    const data = {
      email: email,
    };

    Inertia.post('/check-in', data, {
      onError(errors) {
        setStatus(422);
        setErrors(Object.entries(errors));
        setTimeout(() => setStatus(false), 5000);
      },
    });
  };

  return (
    <>
      <Title
        h1={localeText.title}
        paragraph={localeText.statement}
      />

      <form onSubmit={handleSubmit}>
        <FormInput inputValue={email} onChangeEvent={handleEmail} />

        {status &&
          <div className='flex items-center justify-center'>
            <Alert message={errors} containerColor={'bg-red-100'} borderColor={'border-red-500'} textColor={'text-red-700'} />
          </div>}

        <div className={styles.container}>
          <Button type={'submit'} message={localeText.submit} />
        </div>
      </form>

      <FooterLink text={localeText.footer} link={'/reservation'} click={localeText.click} />
    </>
  );
};

CheckIn.defaultProps = {
  localeText: [],
};

export default CheckIn;

CheckIn.layout = page => <Layout children={page} />;
