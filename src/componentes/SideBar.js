import React, { useState } from "react";
import "../style/componentes/SideBar.css";
import SelecionarLinguagem from '../linguagem/AlterarLinguagem.component';
import { useLanguage } from '../linguagem/ContextoLinguagem';
import { Link } from 'react-router-dom';
import { Menu, SidebarClose } from "lucide-react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { texts } = useLanguage();
    return (
        <>
            <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                <Menu />
            </button>
            <div className={`sidebar ${isOpen ? "" : "closed"}`}>
                <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                    <SidebarClose />
                </button>
                <h2>Menu</h2>
                <SelecionarLinguagem />
                <Link to="/projetos" onClick={() => setIsOpen(!isOpen)}>{texts.projetos}</Link>
                <Link to="/analise" onClick={() => setIsOpen(!isOpen)}>{texts.analise}</Link>
                <Link to="/artigos" onClick={() => setIsOpen(!isOpen)}>{texts.artigos}</Link>
                <Link to="/especializacoes" onClick={() => setIsOpen(!isOpen)}>{texts.especializacoes}</Link>
                <Link to="/sobre" onClick={() => setIsOpen(!isOpen)}>{texts.sobre}</Link>
            </div>
        </>
    );
};

export default Sidebar;
