import { GrReactjs, GrDocker } from 'react-icons/gr';
import { SiFlask, SiDjango, SiAmazonaws } from 'react-icons/si';
import { IoLogoJavascript, IoLogoPython } from 'react-icons/io';

import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title="REACJS" icon={<GrReactjs />} />
        <ConhecimentoItem title="FLASK" icon={<SiFlask />} />
        <ConhecimentoItem title="DJANGO" icon={<SiDjango />} />
        <ConhecimentoItem title="JAVASCRIPT" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="PYTHON" icon={<IoLogoPython />} />
        <ConhecimentoItem title="DOCKER" icon={<GrDocker />} />
        <ConhecimentoItem title="AWS" icon={<SiAmazonaws />} />
      </section>
    </Container>
  );
};

export default Conhecimentos;
