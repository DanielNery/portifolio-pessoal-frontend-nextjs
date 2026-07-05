import Link from 'next/link';
import { FiMessageCircle } from 'react-icons/fi';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Link href="/"><a className="brand"><span>&lt;</span> Daniel Nery <span>/&gt;</span></a></Link>
      <nav aria-label="Navegação principal">
        <Link href="/projetos"><a>Projetos</a></Link>
        <a
          className="contact"
          href="https://wa.me/5511947470374?text=Ol%C3%A1%2C%20Daniel!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
          target="_blank"
          rel="noreferrer"
        >
          <FiMessageCircle /> Fale comigo
        </a>
      </nav>
    </Container>
  );
}

export default Header;
