import React, { useState } from 'react';
import Layout from '../Layout';
import { Inertia } from '@inertiajs/inertia';

import Title from '../../components/Title';
import Label from '../../components/Label';
import FormInput from '../../components/FormInput';
import CustomCalendar from '../../components/CustomCalendar';
import PhotoUploader from '../../components/PhotoUploader';
import Button from '../../components/Button';
import Alert from '../../components/Alert';

import { charactersOnly } from '../../utils/formatters';

const Register = () => {
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');

  // needs refactoring, photo upload.
  const [photo, setPhoto] = useState('...');

  const handleFirstName = (e) => {
    const inputValue = charactersOnly(e);
    setFirstName(inputValue);
  };

  const handleLastName = (e) => {
    const inputValue = charactersOnly(e);
    setLastName(inputValue);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleDateChange = (selectedDate) => {
    setDateOfBirth(selectedDate);
  };

  const handleEmergencyName = (e) => {
    const inputValue = charactersOnly(e);
    setEmergencyName(inputValue);
  };

  const handleEmergencyPhone = (e) => {
    setEmergencyPhone(e.target.value);
  };

  const handlePhotoUpload = (photoData) => {
    setPhoto(photoData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      date_of_birth: dateOfBirth,
      emergency_contact_name: emergencyName,
      emergency_contact_number: emergencyPhone,
      photo: photo,
    };

    Inertia.post('/register', values, {
      onSuccess() {
        //
      },
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
        paragraph={'Please register so you can book a space.'}
      />

      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <FormInput
          inputLabel='First Name'
          inputValue={firstName}
          onChangeEvent={handleFirstName}
        />
        <FormInput
          inputLabel='Last Name'
          inputValue={lastName}
          onChangeEvent={handleLastName}
        />
        <FormInput
          inputLabel='Email'
          inputValue={email}
          onChangeEvent={handleEmail}
        />
        <CustomCalendar
          inputLabel='Date of Birth'
          selectedDate={dateOfBirth}
          onDateChange={handleDateChange}
        />
        <FormInput
          inputLabel='Emergency Contact Name'
          inputValue={emergencyName}
          onChangeEvent={handleEmergencyName}
        />
        <FormInput
          inputLabel='Emergency Contact Phone'
          inputValue={emergencyPhone}
          onChangeEvent={handleEmergencyPhone}
        />

        <Label labelName='Upload Your Picture' />
        <PhotoUploader onPhotoUpload={handlePhotoUpload} />

        {status && (<Alert message={errors} />)}

        <div className='flex items-center justify-center'>
          <Button type={'submit'} message={'Join'} />
        </div>
      </form>
    </>
  );
};

export default Register;

Register.layout = page => <Layout children={page} />;
