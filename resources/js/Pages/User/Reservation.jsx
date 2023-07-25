import React, { useState } from 'react';
import Layout from '../Layout';
import { Inertia } from '@inertiajs/inertia';

import Title from '../../components/Title';
import FormInput from '../../components/FormInput';
import CustomCalendar from '../../components/CustomCalendar';
import Button from '../../components/Button';
import Alert from '../../components/Alert';
import { Link } from '@inertiajs/inertia-react';

const Reservation = () => {
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(false);

  const [email, setEmail] = useState('');
  const [date, setDate] = useState(null);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      date: date,
    };

    Inertia.post('/reservation', data, {
      onError(errors) {
        setStatus(422);
        setErrors(Object.entries(errors));
      }
    });
  };

  return (
    <>
      <Title h1={'Book a Space'} />

      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <FormInput
          inputLabel={'Enter your email account'}
          inputValue={email}
          onChangeEvent={(e) => handleEmail(e)}
        />
        <CustomCalendar
          inputLabel={'Book a date'}
          selectedDate={date}
          onDateChange={handleDateChange}
        />

        {status && <Alert message={errors} />}

        <div className='flex items-center justify-center'>
          <Button type={'submit'} message={'Make Reservation'} />
        </div>
      </form>

      <div className='flex items-center'>
        <p>
          Don't have an account yet?
          <Link className='text-blue-500 underline' href='/register'> Register! </Link>
        </p>
      </div>
    </>
  );
};

export default Reservation;

Reservation.layout = page => <Layout children={page} />;
