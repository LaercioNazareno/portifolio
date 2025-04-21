import { useLanguage } from "../linguagem/ContextoLinguagem";
import imagemPessoal from "../assets/imagempessoal.jpg";
import "../style/paginas/about.page.css";

const About = () => {
    const { texts } = useLanguage();

    return (
        <>
            <section>
                <h2>{texts.sobreTrajetoria}</h2>
                <p>{texts.resumo}</p>
                <p>email: {texts.email}</p>
                <p>
                    <a href="https://www.linkedin.com/in/laercionazareno/">linkedin</a>
                </p>
                <p>
                    <a href="https://github.com/LaercioNazareno/">GitHub</a>
                </p>
            </section>
            <aside>
                <img src={imagemPessoal} alt={texts.nome} className="imagem-pessoal" width={480} height={480} />
            </aside>
        </>
    );
}

export default About