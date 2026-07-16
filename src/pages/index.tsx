import HomeHero from "../components/HomeHero";
import Head from 'next/head';

import axios from 'axios';

import { useRouter } from 'next/router';
import { HomeContainer } from '../styles/HomeStyles';
import { useEffect } from 'react';

const BACKEND_URL = 'https://6ipebbgyheyf23lwaycmjp27yi0kioio.lambda-url.us-east-1.on.aws';

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const utmKeys = ['utm', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    const getParam = (key: string) => {
      const value = router.query[key];
      return Array.isArray(value) ? value[0] : (value ?? '');
    };

    const payload = {
      utm:          utmKeys.filter(k => k !== 'utm').map(k => { const v = getParam(k); return v ? `${k}=${v}` : ''; }).filter(Boolean).join(' | '),
      utm_source:   getParam('utm_source'),
      utm_medium:   getParam('utm_medium'),
      utm_campaign: getParam('utm_campaign'),
      utm_content:  getParam('utm_content'),
      utm_term:     getParam('utm_term'),
      user_agent:   navigator.userAgent,
      referrer:     document.referrer,
      language:     navigator.language,
      screen:       `${screen.width}x${screen.height}`,
    };

    axios.post(`${BACKEND_URL}/api/v1/tracking`, payload).catch(() => {});
    // eslint-disable-next-line
  }, [router.isReady]);


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
