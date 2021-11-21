import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';
import Link from 'next/link';

function Projetos() {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos" />

      <section>
        <ProjetoItem 
          img="https://thumbs.dreamstime.com/z/ui-infogr%C3%A1fico-conjunto-de-dashboard-com-estat%C3%ADsticas-e-an%C3%A1lises-interface-web-cole%C3%A7%C3%A3o-gr%C3%A1ficos-projeto-diagramas-209013577.jpg"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
        <ProjetoItem 
          img="https://thumbs.dreamstime.com/z/ui-infogr%C3%A1fico-conjunto-de-dashboard-com-estat%C3%ADsticas-e-an%C3%A1lises-interface-web-cole%C3%A7%C3%A3o-gr%C3%A1ficos-projeto-diagramas-209013577.jpg"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
        <ProjetoItem 
          img="https://thumbs.dreamstime.com/z/ui-infogr%C3%A1fico-conjunto-de-dashboard-com-estat%C3%ADsticas-e-an%C3%A1lises-interface-web-cole%C3%A7%C3%A3o-gr%C3%A1ficos-projeto-diagramas-209013577.jpg"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
      </section>

      <button type="button">
        <Link href="/projetos">
          <a>
            Ver todos os projetos
          </a>
        </Link>
      </button>

    </Container>
  );
};

export default Projetos;
