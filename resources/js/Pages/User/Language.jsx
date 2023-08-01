import React, { useState } from 'react';
import Layout from '../Layout';
import { Inertia } from '@inertiajs/inertia';
import Button from '../../components/Button';
import Title from '../../components/Title';

const Language = () => {
  const [language, setLanguage] = useState('es');

  let textPosition = language === 'es' ? 'justify-end' : 'justify-left';

  const styles = {
    toggle: `flex items-center ${textPosition} px-1  mb-4 w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-white rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`
  };

  const handleLanguageChange = (e) => {
    const lang = e.target.value;

    lang === 'es' ? setLanguage('en') : setLanguage('es');
  };

  const saveLanguage = () => {
    const data = {
      language: language,
    };

    Inertia.post('language', data);
  };

  return (
    <>
      <label className='relative inline-flex items-center cursor-pointer'>
        <input type='checkbox' value={language} className='sr-only peer' onChange={handleLanguageChange} />
        <div className={styles.toggle}>
          <div className='text-white'>{language}</div>
        </div>
      </label>

      <Button onClick={saveLanguage} message={'save'} />
    </>
  );
};

export default Language;

Language.layout = page => <Layout children={page} />;
