import React, { createContext, useContext, useState } from 'react';
import pt from './traducoes/pt.json';
import en from './traducoes/en.json';

const LanguageContext = createContext();

const languageData = {
  en,
  pt
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, texts: languageData[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
