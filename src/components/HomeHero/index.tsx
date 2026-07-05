import Link from 'next/link';
import {
  FiArrowRight,
  FiBookOpen,
  FiCode,
  FiCpu,
  FiMessageCircle,
  FiMic,
  FiShield,
  FiZap
} from 'react-icons/fi';

import {
  About,
  Actions,
  Badge,
  Container,
  HeroCard,
  ServiceCard,
  Services,
  Skills
} from './styles';

const whatsappUrl =
  'https://wa.me/5511947470374?text=Ol%C3%A1%2C%20Daniel!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.';

const services = [
  {
    icon: <FiCode />,
    title: 'Desenvolvimento',
    text: 'Sistemas, APIs e integrações sob medida, do desenho à entrega.'
  },
  {
    icon: <FiCpu />,
    title: 'Consultoria técnica',
    text: 'Arquitetura, Odoo ERP, automações e evolução de produtos.'
  },
  {
    icon: <FiBookOpen />,
    title: 'Treinamentos',
    text: 'Conteúdo prático para times de engenharia e negócios.'
  },
  {
    icon: <FiMic />,
    title: 'Palestras',
    text: 'Tecnologia, carreira e engenharia aplicadas à vida real.'
  }
];

function HomeHero() {
  return (
    <Container>
      <Badge><span /> Disponível para novos projetos</Badge>

      <HeroCard>
        <div className="portrait">
          <img src="/perfil.png" alt="Daniel Pontes Nery" />
          <span className="experience">+6 anos<br />de experiência</span>
        </div>

        <div className="intro">
          <p className="eyebrow">Engenheiro de Software & Consultor</p>
          <h1>Transformo desafios de negócio em <strong>software que funciona.</strong></h1>
          <p className="lead">
            Ajudo empresas e times a construir, integrar e automatizar soluções
            robustas — com estratégia, código e foco no resultado.
          </p>

          <Actions>
            <a className="primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              <FiMessageCircle /> Agendar uma conversa
            </a>
            <Link href="/projetos">
              <a className="secondary">Ver projetos <FiArrowRight /></a>
            </Link>
          </Actions>
          <p className="microcopy">Conversa inicial sem compromisso pelo WhatsApp.</p>
        </div>
      </HeroCard>

      <About>
        <div>
          <span className="section-label">Como posso ajudar</span>
          <h2>Tecnologia como meio.<br /><strong>Resultado como objetivo.</strong></h2>
        </div>
        <p>
          Experiência em projetos de grande escala, incluindo <b>Porto Seguro</b> e
          <b> BB Seguros</b>. Uno visão de negócio e profundidade técnica para tirar
          ideias do papel e destravar operações.
        </p>
      </About>

      <Services>
        {services.map(service => (
          <ServiceCard key={service.title}>
            <span className="icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </ServiceCard>
        ))}
      </Services>

      <Skills>
        <span><FiShield /> Odoo ERP</span>
        <span><FiCode /> Python & microsserviços</span>
        <span><FiZap /> Eventos & automação</span>
        <span><FiCpu /> Dados, bots & testes</span>
      </Skills>
    </Container>
  );
}

export default HomeHero;
