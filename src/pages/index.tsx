import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import { HomeContainer } from '../styles/HomeStyles';

export default function Home() {
  return (
    <HomeContainer>
        <Header />

        <main className="container"> 
          <HomeHero />
        </main>

    </HomeContainer>
  );
}
