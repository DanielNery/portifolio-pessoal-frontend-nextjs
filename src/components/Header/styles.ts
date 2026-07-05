import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  max-width: 85rem;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};

  .brand {
    color: #fff;
    font-weight: 700;
    font-size: .9rem;
    white-space: nowrap;
    span { color: ${({ theme }) => theme.primary}; font-family: 'JetBrains Mono', monospace; }
  }
  nav { display: flex; align-items: center; gap: .9rem; }
  nav > a { color: ${({ theme }) => theme.textLight}; font-size: .78rem; }
  .contact {
    padding: .65rem .8rem;
    border-radius: .55rem;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background};
    display: flex;
    align-items: center;
    gap: .4rem;
    font-weight: 600;
  }
  @media (max-width: 420px) {
    nav > a:not(.contact) { display: none; }
    .contact { font-size: .7rem; }
  }
`;

// Mantido para as páginas internas que ainda usam o componente NavLink.
export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    color: ${({ isActive, theme }) => isActive ? theme.primary : theme.textLight};
  }
`;
