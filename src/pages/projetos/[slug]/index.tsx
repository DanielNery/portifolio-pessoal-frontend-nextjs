import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';
import { ProjetoContainer  } from '../../../styles/ProjetoStyles';

export default function Projeto() {
    return (
        <ProjetoContainer>
            <Header />
            <BannerProjeto 
                title="Projeto 01"
                type="Website"
                imgUrl="https://thumbs.dreamstime.com/z/ui-infogr%C3%A1fico-conjunto-de-dashboard-com-estat%C3%ADsticas-e-an%C3%A1lises-interface-web-cole%C3%A7%C3%A3o-gr%C3%A1ficos-projeto-diagramas-209013577.jpg"
            />
            <main>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum saepe sapiente, consequuntur natus illo dolore quidem numquam, quaerat, repudiandae molestias aut? Dolorum quis non totam eligendi? Animi voluptates quibusdam ea!</p>
                <button type="button">
                    <a href="#">Ver projeto online</a>
                </button>
            </main>
        </ProjetoContainer>
    )
}