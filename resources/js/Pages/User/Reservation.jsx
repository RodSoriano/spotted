import React, { useState } from 'react';
import Layout from '../Layout';
import { Inertia } from '@inertiajs/inertia';

import Title from '../../components/Title';
import FormInput from '../../components/FormInput';
import CustomCalendar from '../../components/CustomCalendar';
import Button from '../../components/Button';
import Alert from '../../components/Alert';
import FooterLink from '../../components/FooterLink';

import { calendar } from '../../utils/svgIcons';

const Reservation = ({ localeText }) => {
  const [status, setStatus] = useState(false);
  const [errors, setErrors] = useState([]);

  const [email, setEmail] = useState('');
  const [date, setDate] = useState(null);

  const startDate = new Date('2023-10-08'); // normally start on a monday

  const addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);

    return result;
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e);
  };

  const handleSubmit = (form) => {
    form.preventDefault();

    const data = {
      email: email,
      date: date,
    };

    Inertia.post('/reservation', data, {
      onError(errors) {
        setStatus(422);
        setErrors(Object.entries(errors));
        setTimeout(() => setStatus(false), 5000);
      }
    });
  };

  return (
    <>
      <Title h1={localeText.title} />

      <form className='max-w-sm mx-auto' onSubmit={handleSubmit}>
        <FormInput
          inputLabel={localeText.email}
          inputValue={email}
          onChangeEvent={(e) => handleEmail(e)}
        />

        <div className='flex'>
          <div className='flex pr-2'>
            <CustomCalendar
              inputLabel={localeText.date}
              selectedDate={date}
              onDateChange={handleDateChange}
              includeDays={[
                startDate,
                // Next you'll find comments on set only weekends on a month
                addDays(startDate, 1),  // 6  | 1  |
                addDays(startDate, 7),  // 7  | 7  |
                addDays(startDate, 8),  // 13 | 8  |
                addDays(startDate, 14), // 14 | 14 |
                addDays(startDate, 15), // 20 | 15 |
                addDays(startDate, 21), // 21 | 21 |
                addDays(startDate, 22), // 27 | 22 |
                // addDays(startDate, 28)// 28 | c
              ]}
            />
          </div>
          <div className='flex items-center mx-4'>
            <svg {...calendar}>
              <path {...calendar.path} />
            </svg>
          </div>
        </div>

        {status &&
          <div className='flex items-center justify-center'>
            <Alert message={errors} containerColor={'bg-red-100'} borderColor={'border-red-500'} textColor={'text-red-700'} />
          </div>}

        <div className='flex items-center justify-center'>
          <Button type={'submit'} message={localeText.submit} />
        </div>
      </form>

      <FooterLink text={localeText.footer} link={'/register'} click={localeText.click} />
    </>
  );
};

Reservation.defaultProps = {
  localeText: [],
};

export default Reservation;

Reservation.layout = page => <Layout children={page} />;
