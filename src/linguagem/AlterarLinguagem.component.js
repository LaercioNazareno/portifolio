import React from 'react';
import { useLanguage } from './ContextoLinguagem';
import '../style/componentes/SelecionarLinguagem.css';
import { Globe } from 'lucide-react';
const SelecionarLinguagem = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-select-wrapper">
      <Globe className="language-icon" size={20} />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="language-select"
        aria-label="Select language"
      >
        <option value="en">English</option>
        <option value="pt">Português</option>
      </select>
    </div>
  );
};

export default SelecionarLinguagem;