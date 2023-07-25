import React, { useState } from 'react';
import Layout from '../Layout';
import { Inertia } from '@inertiajs/inertia';

import Title from '../../components/Title';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';
import Alert from '../../components/Alert';

const CheckIn = () => {
  const [status, setStatus] = useState(false);
  const [errors, setErrors] = useState([]);

  const [email, setEmail] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
    };

    Inertia.post('/check-in', data, {
      onError(errors) {
        setStatus(422);
        setErrors(Object.entries(errors));
      }
    });
  };

  return (
    <>
      <Title
        h1={'Welcome to the Park'}
        paragraph={'Enter the email you used to make your reservation.'}
      />

      <form onSubmit={handleSubmit}>
        <FormInput
          inputLabel={'Email address'}
          inputValue={email}
          onChangeEvent={(e) => handleEmail(e)}
        />

        {status && <Alert message={errors} />}
        <div className='flex items-center justify-center'>
          <Button type={'submit'} message={'Check In'} />
        </div>
      </form>
    </>
  );
};

export default CheckIn;

CheckIn.layout = page => <Layout children={page} />;
