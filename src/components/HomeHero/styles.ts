import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;


    > .perfil {
        width: 25rem;
        height: 25rem;
        flex: none;
        object-fit: cover;
        border-radius: 50%;
    }

    > div {
        flex: 4;
    }


    @media(max-width: 1450px) {
        > .perfil {
            width: 20rem;
            height: 20rem;
        }

        > div {
            flex: 1; 
        }
    }

    @media(max-width: 1000px) {
        > .perfil {
            width: 15rem;
            height: 15rem;
        }
    }

    @media(max-width: 700px) {
        flex-direction: column-reverse;

        > .perfil {
            width: 12rem;
            height: 12rem;
        }

        > div {
            width: 100%;
        }
    }
`;

export const TextContainer = styled.section`
    margin-botton: 2rem;
    width: 100%;

    h1 {
        font-size: 8rem;
        color: ${({ theme }) => theme.primary};
    }

    h2 {
        font-size: 3rem;
        font-weigth: 400;
        color: ${({ theme }) => theme.secondary};
    }

    @media(max-width: 1450px) {
        h1 {
            font-size: 5rem;          
        }

        h2 {
            font-size: 2rem;
        }
    }

    @media(max-width: 1000px) {
        h1 {
            font-size: 3rem;          
        }

        h2 {
            font-size: 1.5rem;
        }
    }
`;

export const InfosContainer = styled.section`

    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 2rem;

    @media(max-width: 500px) {
        margin-top: 10px;
        flex-direction: column;
    }

`;

export const CodeItem = styled.pre`
    background: ${({ theme }) => theme.gradient};
    padding: 2rem;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 300;
    color: #fff;
    width: 24rem;
    align-self: flex-start;
    trasition: 1s;


    @media(max-width: 1450px){
        width: 18rem;
        padding: 1.5rem;
        font-size: 0.8rem;

    }

    @media(max-width: 1000px){
        width: 100%;
    }

    &:hover{
        filter: brightness(1.2);
        
    }

    &:last-child {
        align-self: flex-end;
    }

    > div {
        margin: 0.2rem 0;
        margin-left: 1rem;

    }

    span.purple {
        color: #c38cdd;
        
    }

    span.blue {
        color: #7ac7e3;
    }

    span.comment {
        color: ${({ theme }) => theme.text};
        margin-bottom: 1rem;
        display: block;
    }

`;