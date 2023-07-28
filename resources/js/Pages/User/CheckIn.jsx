import React, { useState } from 'react';
import Layout from '../Layout';
import { Inertia } from '@inertiajs/inertia';

import Title from '../../components/Title';
import FormInput from '../../components/FormInput';
import { Link } from '@inertiajs/inertia-react';
import Alert from '../../components/Alert';
import Button from '../../components/Button';

const CheckIn = () => {
  const styles = {
    container: 'flex items-center justify-center',
    reservationLink: 'text-blue-500 underline',
  };

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
        setTimeout(() => setStatus(false), 5000);
      },
    });
  };

  return (
    <>
      <Title
        h1={'Welcome to the Park'}
        paragraph={'Enter the email you used to make your reservation.'}
      />

      <form onSubmit={handleSubmit}>
        <FormInput inputValue={email} onChangeEvent={handleEmail} />

        {status && <Alert message={errors} containerColor={'yellow-100'} borderColor={'border-yellow-500'} textColor={'text-yellow-700'} />}

        <div className={styles.container}>
          <Button type={'submit'} message={'Check In'} />
        </div>
      </form>

      <div className='flex items-center'>
        <p>
          Don't have a reservation yet?
          <Link className={styles.reservationLink} href='/reservation'>
            {' '}
            Book a space!{' '}
          </Link>
        </p>
      </div>
    </>
  );
};

export default CheckIn;

CheckIn.layout = page => <Layout children={page} />;
