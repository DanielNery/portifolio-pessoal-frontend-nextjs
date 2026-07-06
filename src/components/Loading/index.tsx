import { LoadingContainer, LoadingSpinner, LoadingText } from './styles';

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingSpinner />
      <LoadingText>
        Pegue um cafézinho, já vai carregar...
      </LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
