import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 34rem;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2.5rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  &:before {
    content: '';
    position: fixed;
    width: 22rem;
    height: 22rem;
    top: -12rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
    opacity: .12;
    filter: blur(70px);
    pointer-events: none;
  }

  footer {
    margin-top: 2rem;
    color: ${({ theme }) => theme.text};
    font: 400 .65rem 'JetBrains Mono', monospace;
    text-align: center;
  }

  footer span { color: ${({ theme }) => theme.primary}; }

  @media (min-width: 600px) {
    padding-top: 3.5rem;
    padding-bottom: 3rem;
  }
`;

export const Profile = styled.header`
  text-align: center;
  position: relative;

  .photo {
    width: 7.5rem;
    height: 7.5rem;
    margin: 0 auto 1rem;
    position: relative;
  }

  img {
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 6px rgba(14, 231, 183, .08);
  }

  .photo span {
    position: absolute;
    right: .35rem;
    bottom: .35rem;
    width: 1rem;
    height: 1rem;
    border: 3px solid ${({ theme }) => theme.background};
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
  }

  .eyebrow {
    color: ${({ theme }) => theme.secondary};
    font: 500 .68rem 'JetBrains Mono', monospace;
    text-transform: uppercase;
    letter-spacing: .08em;
  }

  h1 {
    margin-top: .3rem;
    color: #fff;
    font-size: 2rem;
    letter-spacing: -.04em;
  }

  .bio {
    max-width: 29rem;
    margin: .7rem auto 0;
    color: ${({ theme }) => theme.textLight};
    font-size: .82rem;
    line-height: 1.55;
  }

  .status {
    width: fit-content;
    margin: .9rem auto 1.5rem;
    padding: .4rem .65rem;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 99px;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.backgroundLight};
    font-size: .62rem;
    display: flex;
    align-items: center;
    gap: .4rem;
  }

  .status i {
    width: .4rem;
    height: .4rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
  }
`;

export const LinkList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: .7rem;

  > a {
    min-height: 4.5rem;
    padding: .85rem 1rem;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: .85rem;
    background: ${({ theme }) => theme.backgroundLight};
    color: ${({ theme }) => theme.secondary};
    display: grid;
    grid-template-columns: 2rem 1fr 1.2rem;
    align-items: center;
    gap: .7rem;
    transition: transform .2s, border-color .2s, background .2s;
  }

  > a:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.primary};
  }

  > a.featured {
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background};
  }

  > a.ai {
    border-color: ${({ theme }) => theme.secondary};
    background: linear-gradient(110deg, rgba(122, 199, 227, .14), rgba(14, 231, 183, .08));
    box-shadow: 0 0 24px rgba(122, 199, 227, .08);
  }

  > a.ai b {
    color: ${({ theme }) => theme.primary};
  }

  > a > svg:first-child { font-size: 1.25rem; }
  > a > svg:last-child { justify-self: end; }
  span { min-width: 0; display: flex; flex-direction: column; gap: .2rem; }
  b { color: #fff; font-size: .85rem; }
  small { color: ${({ theme }) => theme.text}; font-size: .65rem; line-height: 1.3; }
  .featured b, .featured small { color: ${({ theme }) => theme.background}; }
`;
