import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
    isActive: boolean;
}

export const Container = styled.header`
    width: 100%;
    height: auto;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};
    
    ul {
        display: flex;
        gap: 2rem;
        align-items: center;
    }

    @media(max-width: 700px) {
        ul {
            flex-direction: column;
        }
    }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`

    a {
        text-transform: uppercase;
        color: ${(props) => 
            props.isActive ? props.theme.primary : props.theme.textHighlight};
        transition:0.5s;
        
        &:hover {
            color: ${props => props.isActive ? lighten(0.2, props.theme.primary) : lighten(0.2, props.theme.textHighlight)};
        }
    }

`;