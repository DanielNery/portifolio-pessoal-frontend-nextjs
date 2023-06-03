import Conhecimentos from "../components/Conhecimentos";
import Experiencias from "../components/Experiencias";
import Footer from "../components/Footer";
import FormContato from "../components/FormContato";
import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import Projetos from "../components/Projetos";
import DataComponent from '../components/DataComponent';

import axios from 'axios';

import { toast } from 'react-toastify';
import { HomeContainer } from '../styles/HomeStyles';


const data = {}

export default function Home() {

  const fetchData = async () => {
    const response = await axios.post('https://danielpontesnery.onrender.com/api/v1/health', data)
      .then(response => {
        toast.success("Carregamento realizado com sucesso!")
      })
      .catch(error => {
        toast.error("Erro ao inicializar serviços!")
      })
  };


  return (
    <HomeContainer>
        <DataComponent request={fetchData} /> 
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
  );
}
