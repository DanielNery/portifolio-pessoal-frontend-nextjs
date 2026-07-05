import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    > main {
        display: flex;
        flex-direction: column;
        gap: 6rem;
        padding-bottom: 5rem;
        
    }

    @media(max-width: 700px) {
        > main {
            gap: 4.5rem;
        }
    }
`;
