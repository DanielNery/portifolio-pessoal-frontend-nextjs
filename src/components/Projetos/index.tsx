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
          title="Dashboard em Tempo Real"
          type="Sistema WEB"
          slug="dashboard-tempo-real"
        />
        <ProjetoItem 
          img="https://user-images.githubusercontent.com/59855397/137625571-170aec0a-a311-4d47-9054-e8af64437074.png"
          title="Plataforma de Trocas Online"
          type="Website"
          slug="olx-shift"
        />
        <ProjetoItem 
          img="https://user-images.githubusercontent.com/59855397/137046126-d61508fb-9b32-4a54-ba49-8a29c29099e9.png"
          title="Plataforma de Listagem de Músicas"
          type="Website"
          slug="genius-list-msc"
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
