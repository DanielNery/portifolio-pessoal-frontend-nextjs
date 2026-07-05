import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding-top: 2.5rem;
`;

export const Badge = styled.div`
  width: fit-content;
  margin: 0 auto 1.25rem;
  padding: .55rem .85rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 99px;
  color: ${({ theme }) => theme.textLight};
  background: ${({ theme }) => theme.backgroundLight};
  font-size: .75rem;
  display: flex;
  align-items: center;
  gap: .5rem;

  span {
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
    box-shadow: 0 0 12px ${({ theme }) => theme.primary};
  }
`;

export const HeroCard = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  gap: 1.5rem;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1.5rem;
  background: ${({ theme }) => theme.gradient};

  &:after {
    content: '';
    position: absolute;
    width: 18rem;
    height: 18rem;
    right: -9rem;
    top: -10rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
    opacity: .12;
    filter: blur(20px);
  }

  .portrait {
    position: relative;
    width: 9.5rem;
    margin: 0 auto;

    img {
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 50%;
      border: 3px solid ${({ theme }) => theme.primary};
    }
  }

  .experience {
    position: absolute;
    right: -2.8rem;
    bottom: -.25rem;
    padding: .55rem .65rem;
    border-radius: .7rem;
    color: ${({ theme }) => theme.background};
    background: ${({ theme }) => theme.primary};
    font-size: .65rem;
    line-height: 1.25;
    font-weight: 700;
  }

  .intro { text-align: center; position: relative; z-index: 1; }
  .eyebrow {
    margin-bottom: .75rem;
    color: ${({ theme }) => theme.secondary};
    font: 500 .72rem 'JetBrains Mono', monospace;
    text-transform: uppercase;
    letter-spacing: .08em;
  }
  h1 {
    color: #fff;
    font-size: clamp(2rem, 9vw, 4.25rem);
    line-height: 1.05;
    letter-spacing: -.045em;
  }
  h1 strong { color: ${({ theme }) => theme.primary}; }
  .lead {
    max-width: 42rem;
    margin: 1.2rem auto 0;
    color: ${({ theme }) => theme.textLight};
    line-height: 1.65;
    font-size: .95rem;
  }
  .microcopy {
    margin-top: .7rem;
    color: ${({ theme }) => theme.text};
    font-size: .7rem;
  }

  @media (min-width: 760px) {
    grid-template-columns: 15rem 1fr;
    align-items: center;
    padding: 3rem;
    .portrait { width: 13rem; }
    .intro { text-align: left; }
    .lead { margin-left: 0; }
    .microcopy { margin-left: .2rem; }
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  margin-top: 1.5rem;

  a {
    min-height: 3.25rem;
    padding: .85rem 1rem;
    border-radius: .7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .6rem;
    font-weight: 600;
    transition: transform .2s, filter .2s;
  }
  a:hover { transform: translateY(-2px); filter: brightness(1.08); }
  .primary { background: ${({ theme }) => theme.primary}; color: ${({ theme }) => theme.background}; }
  .secondary { border: 1px solid ${({ theme }) => theme.border}; color: #fff; }

  @media (min-width: 520px) {
    flex-direction: row;
    a { padding-left: 1.4rem; padding-right: 1.4rem; }
  }
`;

export const About = styled.div`
  display: grid;
  gap: 1.25rem;
  margin-top: 5rem;
  align-items: end;
  .section-label {
    display: block;
    color: ${({ theme }) => theme.primary};
    font: 500 .7rem 'JetBrains Mono', monospace;
    text-transform: uppercase;
    margin-bottom: .75rem;
  }
  h2 { color: #fff; font-size: clamp(1.8rem, 7vw, 3rem); line-height: 1.1; }
  h2 strong { color: ${({ theme }) => theme.secondary}; }
  p { color: ${({ theme }) => theme.textLight}; line-height: 1.7; }
  b { color: #fff; }
  @media (min-width: 760px) { grid-template-columns: 1.15fr .85fr; }
`;

export const Services = styled.div`
  display: grid;
  gap: .8rem;
  margin-top: 2rem;
  @media (min-width: 600px) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: 1000px) { grid-template-columns: repeat(4, 1fr); }
`;

export const ServiceCard = styled.article`
  min-height: 12rem;
  padding: 1.35rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1rem;
  background: ${({ theme }) => theme.backgroundLight};
  transition: border-color .2s, transform .2s;
  &:hover { border-color: ${({ theme }) => theme.primary}; transform: translateY(-3px); }
  .icon {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: .65rem;
    display: grid;
    place-items: center;
    background: rgba(14, 231, 183, .1);
    color: ${({ theme }) => theme.primary};
    font-size: 1.2rem;
  }
  h3 { margin-top: 1.2rem; color: #fff; font-size: 1rem; }
  p { margin-top: .6rem; color: ${({ theme }) => theme.text}; font-size: .82rem; line-height: 1.55; }
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: .6rem;
  margin-top: 1.5rem;
  span {
    display: flex;
    align-items: center;
    gap: .4rem;
    padding: .65rem .8rem;
    border-radius: .5rem;
    color: ${({ theme }) => theme.textLight};
    background: rgba(255,255,255,.035);
    font-size: .72rem;
  }
  svg { color: ${({ theme }) => theme.secondary}; }
`;
