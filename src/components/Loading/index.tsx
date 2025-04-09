import { LoadingContainer, LoadingSpinner, LoadingText } from './styles';

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingSpinner />
      <LoadingText>
        Pegue um cafézinho, já vai carregar...
        <span>Estou usando uma instância gratuita</span>
      </LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
