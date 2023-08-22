import React, { useState } from 'react';
import Layout from '../Layout';
import { Inertia } from '@inertiajs/inertia';

import Button from '../../components/Button';
import Title from '../../components/Title';

const Language = ({ localeText }) => {
  const [language, setLanguage] = useState('es');

  let textPosition = language === 'es' ? 'justify-end' : 'justify-left';

  const styles = {
    toggle: `flex items-center ${textPosition} px-1 w-11 h-8 bg-purple-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-500 dark:peer-focus:ring-white rounded-sm peer dark:bg-stone-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-sm after:h-7 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-500`
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
      <Title h1={localeText.title} />
      <label className='relative inline-flex items-center cursor-pointer'>
        <input type='checkbox' value={language} className='sr-only peer' onChange={handleLanguageChange} />
        <div className={styles.toggle}>
          <div className='text-white'>{language}</div>
        </div>
      </label>

      <div className='mt-4'>
        <Button onClick={saveLanguage} message={localeText.button} />
      </div>
    </>
  );
};

Language.defaultProps = {
  localeText: [],
};

export default Language;

Language.layout = page => <Layout children={page} />;
