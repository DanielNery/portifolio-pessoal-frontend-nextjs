
import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';


function Experiencias() {
  return (
    <Container>
      <SectionTitle title="02 Anos" description="de Experiência"/>

      <section>
        <ExperienciaItem 
          year="2021"
          title="Dev Back End"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />
        
        <ExperienciaItem 
          year="2021"
          title="Dev Back End"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />

        <ExperienciaItem 
          year="2021"
          title="Dev Back End"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />

        <ExperienciaItem 
          year="2021"
          title="Dev Back End"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />
      </section>

    </Container>
  );
};

export default Experiencias;
