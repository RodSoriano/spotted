import React from 'react';
import Layout from '../Layout';
import Title from '../../components/Title';

const DayPass = ({ user, date, localeText }) => {
  const styles = {
    container: 'flex items-center justify-center mb-4 w-36 h-36 bg-gray-300 rounded-full mx-4',
    userProfile: 'w-full h-full rounded-full object-cover',
    userInfo: 'text-center',
    userName: 'text-xl font-semibold mb-2',
    userTotal: 'text-gray-600',
    userDate: 'text-gray-600 mt-2',
  };

  return (
    <>
      <Title h1={localeText.title} paragraph={localeText.statement} />

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
        <p className={styles.userDate}> <strong>{date}</strong></p>
      </div>
    </>
  );
};

DayPass.defaultProps = {
  localeText: [],
};

export default DayPass;

DayPass.layout = page => <Layout children={page} />;
