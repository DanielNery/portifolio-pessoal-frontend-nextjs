import Link from 'next/link';
import {
  FiArrowUpRight,
  FiBookOpen,
  FiCode,
  FiCpu,
  FiFolder,
  FiMessageCircle,
  FiMic
} from 'react-icons/fi';

import { Container, LinkList, Profile } from './styles';

const whatsapp = 'https://wa.me/5511947470374';

const whatsappLink = (message: string) =>
  `${whatsapp}?text=${encodeURIComponent(message)}`;

function HomeHero() {
  return (
    <Container>
      <Profile>
        <div className="photo">
          <img src="/perfil.png" alt="Daniel Pontes Nery" />
          <span />
        </div>
        <p className="eyebrow">Engenheiro de Software</p>
        <h1>Daniel Nery</h1>
        <p className="bio">
          Especialista em Agentes de IA, MCPs, software, Odoo ERP e automação para
          transformar desafios de negócio em resultados.
        </p>
        <div className="status"><i /> Disponível para novos projetos</div>
      </Profile>

      <LinkList aria-label="Serviços e links">
        <a
          className="featured"
          href={whatsappLink('Olá, Daniel! Vi seu portfólio e gostaria de agendar uma conversa sobre consultoria.')}
          target="_blank"
          rel="noreferrer"
        >
          <FiMessageCircle />
          <span><b>Agendar consultoria</b><small>Fale comigo pelo WhatsApp</small></span>
          <FiArrowUpRight />
        </a>

        <a
          className="ai"
          href={whatsappLink('Olá, Daniel! Gostaria de conversar sobre a criação de Agentes de IA e MCPs para minha empresa.')}
          target="_blank"
          rel="noreferrer"
        >
          <FiCpu />
          <span><b>Agentes de IA & MCPs</b><small>Agentes inteligentes e integrações com seus sistemas</small></span>
          <FiArrowUpRight />
        </a>

        <a
          href={whatsappLink('Olá, Daniel! Gostaria de conversar sobre um projeto de desenvolvimento de software.')}
          target="_blank"
          rel="noreferrer"
        >
          <FiCode />
          <span><b>Desenvolvimento de software</b><small>Sistemas, APIs, integrações e automações</small></span>
          <FiArrowUpRight />
        </a>

        <a
          href={whatsappLink('Olá, Daniel! Gostaria de saber mais sobre seus treinamentos.')}
          target="_blank"
          rel="noreferrer"
        >
          <FiBookOpen />
          <span><b>Treinamentos</b><small>Conteúdo prático para times e empresas</small></span>
          <FiArrowUpRight />
        </a>

        <a
          href={whatsappLink('Olá, Daniel! Gostaria de convidá-lo para uma palestra.')}
          target="_blank"
          rel="noreferrer"
        >
          <FiMic />
          <span><b>Palestras</b><small>Tecnologia, engenharia e carreira</small></span>
          <FiArrowUpRight />
        </a>

        <Link href="/projetos">
          <a>
            <FiFolder />
            <span><b>Conheça meus projetos</b><small>Veja alguns trabalhos e soluções</small></span>
            <FiArrowUpRight />
          </a>
        </Link>
      </LinkList>

      <footer>
        <span>&lt;</span> mais de 6 anos construindo tecnologia <span>/&gt;</span>
      </footer>
    </Container>
  );
}

export default HomeHero;
