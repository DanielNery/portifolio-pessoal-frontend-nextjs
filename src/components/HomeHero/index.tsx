
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import Image from 'next/image'

function HomeHero() {
  
  return (
    <Container>
      <Image src="/perfil4.png" alt="me" width="500" height="500" className="perfil" />
      <div>
        <TextContainer>
          <h1>Hello World</h1>
          <h2>Seja bem vindo(a)</h2>
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
              Função: <span className="blue">Analista de Sistemas</span>
            </div>
            <div>
              Empresa: <span className="blue">Confitec</span>
            </div>
            {'\u007B'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
};

export default HomeHero;
