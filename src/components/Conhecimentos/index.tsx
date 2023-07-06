import ConhecimentoItem from './ConhecimentoItem';
import SectionTitle from '../SectionTitle';
import DataComponent from '../../components/DataComponent';
import Loading from '../Loading';
import axios from 'axios';

import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { GrReactjs, GrDocker } from 'react-icons/gr';
import { SiFlask, SiDjango, SiAmazonaws } from 'react-icons/si';
import { IoLogoJavascript, IoLogoPython } from 'react-icons/io';
import { Container } from './styles';



function Conhecimentos() {

  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    const response = await axios.get('https://danielpontesnery.onrender.com/api/v1/knowledges', data)
      .then(response => {
        setData(response.data);
        toast.success("Conhecimentos carregados com sucesso!")
      })
      .catch(error => {
        toast.error("Não foi possível obter os conhecimentos!")
      })
  };


  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
        <DataComponent request={fetchData} /> 
        {/* {data ? (
            <section>
              {data.map((item) => (
                <ConhecimentoItem
                  title={item.nm_title}
                  icon={item.nm_icon}
                />
              ))}
            </section>
          ) : (
          <Loading />
        )} */}

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
