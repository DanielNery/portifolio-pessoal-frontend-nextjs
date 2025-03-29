import { LoadingContainer, LoadingSpinner } from './styles';

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingSpinner />
      <h1>Pode levar um tempinho, pois a instância é gratuíta :)</h1>
      <h2>Pegue um cafézinho que já vai carregar...</h2>
    </LoadingContainer>
  );
};

export default Loading;