
import React, { useState } from 'react';

import axios from 'axios';
import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import DataComponent from '../../components/DataComponent';
import Loading from '../Loading';

import { toast } from 'react-toastify';
import { Container } from './styles';


function Experiencias() {

  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    const response = await axios.get('https://danielpontesnery.onrender.com/api/v1/experiences', data)
      .then(response => {
        setData(response.data);
        console.log(response.data)
        toast.success("Experiências carregadas com sucesso!")
      })
      .catch(error => {
        toast.error("Não foi possível obter as experiências!")
      })
  };


  return (
    <Container>
      <DataComponent request={fetchData} />
      <SectionTitle title="05 Anos" description="de Experiência" />


      {/* <section> */}
      {data ? (
        <section>
          {data.map((item) => (
            <ExperienciaItem
              year={item.nm_year}
              title={item.nm_title}
              description={item.nm_description}
            />
          ))}
        </section>
      ) : (
        <Loading />
      )}

      {/* <ExperienciaItem 
          year="2021"
          title="Analista de Sistemas"
          description="
            Desenvolvimento de APIs RESTful com Flask 
            para sistema de seguros do Banco do Brasil.
            Uso de containers Docker e infraestrutura AWS."
        />
        
        <ExperienciaItem 
          year="2021"
          title="Hackathon OLX Brasil"
          description="
            Finalista no Hackathon OLX Brasil, com o projeto OLX Shift,
            plataforma de trocas online para contribuir com o consumo
            consciente, usando ReatJS.
          "
        />

        <ExperienciaItem 
          year="2021"
          title="Iniciação Científica"
          description="
            Para odesenvolvimento de um calçado inteligente
            desenvolvemos um sistema para apresentar de forma gráfica
            e em tempo real os dados de sensores, usando Flask no Backend
            e ReactJS no frontend.
          "
        />

        <ExperienciaItem 
          year="2020"
          title="Auxiliar de Desenvolvimento de Sistemas"
          description="
            Desenvolvimento e customização do ERP Odoo, usando Python
            PostgreSQL, Docker e insfraestrutura AWS.
          "
        />

         */}
      {/* </section> */}

    </Container>
  );
};

export default Experiencias;
