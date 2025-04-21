import { Link } from 'react-router-dom';
import '../style/componentes/Nav.css'
import { useLanguage } from '../linguagem/ContextoLinguagem';
import SelecionarLinguagem from '../linguagem/AlterarLinguagem.component';

const Nav = () => {
    const { texts } = useLanguage();

    return (
        <nav>
            <Link to="/projetos">{texts.projetos}</Link>
            <Link to="/analise">{texts.analise}</Link>
            <Link to="/artigos">{texts.artigos}</Link>
            <Link to="/especializacoes">{texts.especializacoes}</Link>
            <Link to="/sobre">{texts.sobre}</Link>
            <SelecionarLinguagem />
        </nav>
    )
}

export default Nav