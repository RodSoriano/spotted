import React, { useState } from 'react';
import Layout from '../Layout';

import Title from '../../components/Title';

const DayPass = ({ user, date }) => {

  return (
    <>
      <Title h1="Great to See You Again!" />

      <div className="flex items-center justify-center mb-6 w-24 h-24 bg-gray-300 rounded-full">
        <img
          src={user.photo}
          alt="User profile picture."
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">
          {user.first_name} {user.last_name}
        </h2>
        <p className="text-gray-600">Total: ${user.fee}</p>
        <p className="text-gray-600 mt-2">Date: {date}</p>
      </div>
    </>
  );
};

export default DayPass;

DayPass.layout = page => <Layout children={page} />;
