
import NavLink from './NavLink';
import { Container } from './styles';


function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" />
        <NavLink title="Bootcamps" path="/bootcamps" />
        <NavLink title="Curso" path="/cursos" />
        <NavLink title="Hackathons" path="/hackathons" />
        <NavLink title="Freelances" path="/freelances" />
      </ul>
    </Container>
  );
};

export default Header;
