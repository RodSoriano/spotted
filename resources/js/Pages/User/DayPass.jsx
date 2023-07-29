import React from 'react';
import Layout from '../Layout';
import Title from '../../components/Title';
import { format } from 'date-fns';

const DayPass = ({ user, date }) => {
  const styles = {
    container: 'flex items-center justify-center mb-6 w-24 h-24 bg-gray-300 rounded-full',
    userProfile: 'w-full h-full rounded-full object-cover',
    userInfo: 'text-center',
    userName: 'text-xl font-semibold mb-2',
    userTotal: 'text-gray-600',
    userDate: 'text-gray-600 mt-2',
  };

  const reservation = new Date(date);
  const formattedDate = format(reservation, 'd MMMM, yyyy');

  return (
    <>
      <Title h1='Great to See You Again!' />

      <div className={styles.container}>
        <img
          src={user.photo}
          alt='User profile'
          className={styles.userProfile}
        />
      </div>
      <div className={styles.userInfo}>
        <h2 className={styles.userName}>
          {user.first_name} {user.last_name}
        </h2>
        <p className={styles.userTotal}>Total: <strong>${user.fee}.00</strong></p>
        <p className={styles.userDate}>Date: <strong>{formattedDate}</strong></p>
      </div>
    </>
  );
};

export default DayPass;

DayPass.layout = page => <Layout children={page} />;
