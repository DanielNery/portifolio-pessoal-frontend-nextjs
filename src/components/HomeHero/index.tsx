
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import Image from 'next/image'

function HomeHero() {
  
  return (
    <Container>
      <Image src="/perfil.png" alt="me" width="500" height="500" className="perfil" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Daniel</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span>{'\u007B'}
            <div>
              Nome: <span className="blue">Daniel,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Nery</span>
            </div>
            {'\u007B'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Cargo</span>{'\u007B'}
            <div>
              Função: <span className="blue">Dev FullStack</span>
            </div>
            <div>
              Empresa: <span className="blue">Nery</span>
            </div>
            {'\u007B'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
};

export default HomeHero;
