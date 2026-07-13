import HomeHero from "../components/HomeHero";
import Head from 'next/head';

import axios from 'axios';

import { useRouter } from 'next/router';
import { HomeContainer } from '../styles/HomeStyles';
import { useEffect } from 'react';


export default function Home() {

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

    fireAndForget(tracking);
    // eslint-disable-next-line
  }, [router.isReady]);

  const fireAndForget = (tracking: string) => {
    const payload: any = {
      name: '',
      email: '',
      message: 'Acesso registrado no portifólio!',
    };
    if (tracking) {
      payload.utm = tracking;
    }

    axios.post('https://2qko2n03od.execute-api.us-east-1.amazonaws.com/api/v1/health', payload).catch(() => {});
    axios.post(`https://2qko2n03od.execute-api.us-east-1.amazonaws.com/api/v1/contato/danielpontesnery@gmail.com`, payload).catch(() => {});
  };


  return (
    <>
    <Head>
      <title>Daniel Nery | Engenharia de Software & Consultoria</title>
      <meta name="description" content="Consultoria, desenvolvimento, automação, treinamentos e palestras com Daniel Nery, engenheiro de software." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <HomeContainer>
      <HomeHero />
    </HomeContainer>
    </>
  );
}
