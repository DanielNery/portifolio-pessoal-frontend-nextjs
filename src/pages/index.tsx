import HomeHero from "../components/HomeHero";
import Loading from '../components/Loading';
import Head from 'next/head';

import axios from 'axios';

import { useRouter } from 'next/router';
import { HomeContainer } from '../styles/HomeStyles';
import { useState, useEffect } from 'react';


export default function Home() {

  const [data, setData] = useState<any>(null);  
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const trackedParams = ['utm', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    const tracking = trackedParams
      .map(key => {
        const value = router.query[key];
        const normalized = Array.isArray(value) ? value[0] : value;
        return normalized ? `${key}=${normalized}` : '';
      })
      .filter(Boolean)
      .join(' | ');

    fetchData(tracking);
    // eslint-disable-next-line
  }, [router.isReady]);

  const fetchData = async (tracking: string) => {
    let payload: any = {
      name: '',
      email: '',
      message: 'Acesso registrado no portifólio!',
    };
    if (tracking) {
      payload.utm = tracking;
    }

    try {
      const response = await axios.post('https://danielpontesnery.onrender.com/api/v1/health', payload);
      setData(response?.data || {});
    } catch (error) {
      setData({});
    }

    try {
      await axios.post(`https://danielpontesnery.onrender.com/api/v1/contato/danielpontesnery@gmail.com`, payload);
    } catch (error) {
      // A indisponibilidade da notificação não impede o visitante de acessar o site.
    }
  };


  return (
    <>
    <Head>
      <title>Daniel Nery | Engenharia de Software & Consultoria</title>
      <meta name="description" content="Consultoria, desenvolvimento, automação, treinamentos e palestras com Daniel Nery, engenheiro de software." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    { data ? (
        <HomeContainer>
          <HomeHero />
      </HomeContainer>
      ) : <Loading />
    }</>
  );
}
