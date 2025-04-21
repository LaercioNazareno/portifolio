import { LanguageProvider } from "./linguagem/ContextoLinguagem";
import PaginaBase from "./paginas/Base.pagina";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <PaginaBase />
      </div>
    </LanguageProvider>
  );
}

export default App;
