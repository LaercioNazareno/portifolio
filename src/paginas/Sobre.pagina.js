import { useLanguage } from "../linguagem/ContextoLinguagem";
import imagemPessoal from "../assets/imagempessoal.jpg";
import "../style/paginas/about.page.css";
import Card from "../componentes/Card";

const About = () => {
    const { texts } = useLanguage();

    return (
        <>
            <Card>
                <section>
                    <h2>{texts.sobreTrajetoria}</h2>
                    <p>{texts.resumo}</p>
                    <p>email: {texts.email}</p>
                    <p>
                        <a href="https://www.linkedin.com/in/laercionazareno/">Linkedin</a>
                    </p>
                    <p>
                        <a href="https://github.com/LaercioNazareno/">GitHub</a>
                    </p>
                </section>
            </Card>

            <aside>
                <img src={imagemPessoal} alt={texts.nome} className="imagem-pessoal" width={480} height={480} />
            </aside>
        </>
    );
}

export default About