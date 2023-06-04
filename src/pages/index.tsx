import Conhecimentos from "../components/Conhecimentos";
import Experiencias from "../components/Experiencias";
import Footer from "../components/Footer";
import FormContato from "../components/FormContato";
import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import Projetos from "../components/Projetos";
import DataComponent from '../components/DataComponent';
import Loading from '../components/Loading';

import axios from 'axios';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { HomeContainer } from '../styles/HomeStyles';


export default function Home() {

  const [data, setData] = useState<any>(null);  

  const fetchData = async () => {

    const payload = {

    }

    const response = await axios.post('https://danielpontesnery.onrender.com/api/v1/health', payload)
      .then(response => {
        setData(response.data)
        toast.success("Acesso registrado com sucesso!")
      })
      .catch(error => {
        setData({})
        toast.error("Erro ao registrar acesso!")
      })
  };


  return (
    <>
    <DataComponent request={fetchData} /> 
    { data ? (
        <HomeContainer>
          <Header />
          <main className="container"> 
            <HomeHero />
            <Experiencias />
            <Projetos />
            <Conhecimentos />
            <FormContato />
          </main>
          <Footer />
      </HomeContainer>
      ) : <></>
    }</>
  );
}
