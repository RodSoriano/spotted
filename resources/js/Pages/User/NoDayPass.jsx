import React, { useState } from 'react';
import Layout from '../Layout';
import Title from '../../components/Title';
import IconTrash from '../../components/icons/IconTrash';
import Button from '../../components/Button';
import { Inertia } from '@inertiajs/inertia';

const NoDayPass = ({ email, localeText, date }) => {
  const [activeDelete, setActiveDelete] = useState(false);
  let color = 'text-red-800';

  const handleButtonChange = () => {
    setActiveDelete(true);
  };

  const handleDelete = () => {
    const data = {
      email: email
    };

    Inertia.post('/reservation-d', data);
  };

  return (
    <>
      <Title h1={localeText.title} />

      <div className='flex flex-col items-center justify-center text-center mb-4'>
        <p>{localeText.statement}</p>
        <strong>{date}.</strong>
      </div>

      <div className='flex flex-col items-center justify-center text-center m-4'>
        <strong>{localeText.footer.question}</strong>
        <p>{localeText.footer.followup}</p>
      </div>

      {activeDelete ?
        <Button color={'bg-red-600'} onClick={handleDelete} message={localeText.button} />
        :
        <button name='trash-button' className='m-4 p-4 border-solid border-2 border-red-800 rounded-md' onClick={handleButtonChange}>
          <IconTrash width='30px' height='30px' className={color} />
        </button>
      }
    </>
  );
};

NoDayPass.defaultProps = {
  localeText: [],
  date: '',
};

export default NoDayPass;

NoDayPass.layout = page => <Layout children={page} />;
