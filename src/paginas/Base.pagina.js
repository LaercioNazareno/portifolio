import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../componentes/Header"
import Nav from "../componentes/Nav"
import '../style/paginas/basepagina.css'
import About from './Sobre.pagina';

const PaginaBase = () => {
    return (
        <>
            <Router>
                <div className="navbar">
                    <Header />
                    <Nav />
                </div>
                <main>
                    <Routes>
                        <Route path="/" element={<About/>} />
                        <Route path="/projetos" element={<>projetos</>} />
                        <Route path="/analise" element={<>analise</>} />
                        <Route path="/artigos" element={<>artigos</>} />
                        <Route path="/sobre" element={<About/>} />
                    </Routes>
                </main>
            </Router>
        </>
    )
}
export default PaginaBase