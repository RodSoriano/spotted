import React, { useState } from 'react';
import Layout from '../Layout';
import { Inertia } from '@inertiajs/inertia';

import Title from '../../components/Title';
import Label from '../../components/Label';
import FormInput from '../../components/FormInput';
import CustomCalendar from '../../components/CustomCalendar';
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
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isAccepted, setIsAccepted] = useState(false);

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

  const handlePhotoSelect = (e) => {
    const photoInput = e.target;
    const photo = photoInput.files[0];

    if (photo) {
      setSelectedPhoto(photo);

      // We can also read the photo as a data URL or perform other operations
      // const reader = new FileReader();
      // reader.onload = function (e) {
      //   const dataURL = e.target.result;
      //   console.log('Data URL:', dataURL);
      // };
      // reader.readAsDataURL(photo);
    }
  };

  const handleTermsAndConditions = () => {
    if (confirm('Terms and Conditions.')) {
      setIsAccepted(true);
    } else {
      setIsAccepted(false);
    }
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
      photo: selectedPhoto,
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
        paragraph={'Please enter your information to register.'}
      />

      <form className='max-w-sm mx-auto' onSubmit={handleSubmit}>
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
        <div className='mt-4 mb-4'>
          <input type='file' name='photo' accept='image/*' onChange={handlePhotoSelect} />
          {/*selectedPhoto && (
            <div>
              We can add more info over here from the photo
              <h3>Selected Photo Information:</h3>
              <p>Name: {selectedPhoto.name}</p>
              <p>Size: {selectedPhoto.size} bytes</p>
              <p>Type: {selectedPhoto.type}</p>
            </div>
          ) */}
        </div>

        {!isAccepted &&
          <a
            className='bg-purple-500 text-white py-2 px-4 rounded-full text-lg mb-4 transform transition-transform hover:scale-105'
            href="#"
            onClick={handleTermsAndConditions}
          >
            Terms and Conditions
          </a>
        }

        {status && (<Alert message={errors} />)}

        {isAccepted &&
          <div className='flex items-center justify-center'>
            <Button type={'submit'} message={'Join'} />
          </div>
        }
      </form>
    </>
  );
};

export default Register;

Register.layout = page => <Layout children={page} />;
