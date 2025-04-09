import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${({ theme }) => theme.background};
  gap: 2rem;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid ${({ theme }) => theme.primary}20;
  border-top: 3px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  animation: ${spinAnimation} 0.8s linear infinite;
  box-shadow: 0 0 15px ${({ theme }) => theme.primary}40;
`;

export const LoadingText = styled.h2`
  color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  animation: ${fadeIn} 0.3s ease-in-out;
  
  span {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.secondary};
    display: block;
    margin-top: 0.5rem;
  }
`;