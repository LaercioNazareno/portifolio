import Card from "../../componentes/Card";
import projetos from "../../dados/projetos.json";
import DescricaoProjetoComponente from "./descricao.component";

const ListProjects = () => {
    return (
        <>
            {
                projetos.map((projeto) => {
                    return (
                        <Card key={projeto.id}>
                            <DescricaoProjetoComponente projeto={projeto} />
                        </Card>
                    )
                })
            }
        </>
    );
}

export default ListProjects;