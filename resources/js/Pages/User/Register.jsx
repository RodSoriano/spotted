import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Layout from '../Layout';
import Label from '../../components/Label';
import FormInput from '../../components/FormInput';
import { charactersOnly } from '../../utils/formatters';
import PhotoUploader from '../../components/PhotoUploader';
import CustomCalendar from '../../components/CustomCalendar';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [photo, setPhoto] = useState(null);

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
    Inertia.post('/register', values);
  };

  return (
    <>
      <h1 className="text-xl font-bold mb-4 text-gray-800 flex items-center justify-center">
        Welcome to the Park
      </h1>

      <p className="mb-4 text-gray-800 flex items-center justify-center">
        Please register so you can book a space
      </p>

      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <FormInput
          inputName="First Name"
          inputValue={firstName}
          onChangeEvent={handleFirstName}
        />
        <FormInput
          inputName="Last Name"
          inputValue={lastName}
          onChangeEvent={handleLastName}
        />
        <FormInput
          inputName="Email"
          inputValue={email}
          onChangeEvent={handleEmail}
        />
        <CustomCalendar
          inputLabel="Date of Birth"
          selectedDate={dateOfBirth}
          onDateChange={handleDateChange}
        />
        <FormInput
          inputName="Emergency Contact Name"
          inputValue={emergencyName}
          onChangeEvent={handleEmergencyName}
        />
        <FormInput
          inputName="Emergency Contact Phone"
          inputValue={emergencyPhone}
          onChangeEvent={handleEmergencyPhone}
        />

        <Label labelName="Upload Your Picture" />
        <PhotoUploader onPhotoUpload={handlePhotoUpload} />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Join
        </button>
      </form>
    </>
  );
};

export default Register;

Register.layout = page => <Layout children={page} />;
