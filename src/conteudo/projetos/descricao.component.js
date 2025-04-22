import '../../style/conteudo/projeto.css';

const DescricaoProjetoComponente = ({projeto}) => {
    return (
        <div className="descricao-projeto">
            <h2>{projeto.titulo}</h2>
            <p>{projeto.descricao}</p>
            <a href={projeto.link} target="_blank" rel="noopener noreferrer">Ver projeto</a>
        </div>
    );
}

export default DescricaoProjetoComponente;