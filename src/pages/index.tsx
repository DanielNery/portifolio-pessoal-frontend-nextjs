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

import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { HomeContainer } from '../styles/HomeStyles';
import { useState, useEffect } from 'react';


export default function Home() {

  const [data, setData] = useState<any>(null);  
  const router = useRouter();
  const utm = router.query.utm || '';
  const utmValue = Array.isArray(utm) ? utm[0] : utm;

  useEffect(() => {
    if (!router.isReady) return;
    fetchData();
    // eslint-disable-next-line
  }, [router.isReady]);

  const fetchData = async () => {
    let payload: any = {
      name: '',
      email: '',
      message: 'Acesso registrado no portifólio!',
    };
    if (utmValue && typeof utmValue === 'string' && utmValue.trim() !== '') {
      payload.utm = utmValue;
    }

    try {
      const response = await axios.post('https://danielpontesnery.onrender.com/api/v1/health', payload);
      setData(response?.data || {});
      toast.success("Acesso registrado com sucesso!");
    } catch (error) {
      setData({});
      toast.error("Erro ao registrar acesso!");
    }

    try {
      await axios.post(`https://danielpontesnery.onrender.com/api/v1/contato/danielpontesnery@gmail.com`, payload);
      toast.success("Notificação enviada com sucesso!");
    } catch (error) {
      toast.error("Erro ao enviar notificação!");
    }
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
            <FormContato utm={utmValue} />
          </main>
          <Footer />
      </HomeContainer>
      ) : <></>
    }</>
  );
}
