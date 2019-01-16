import styled from 'styled-components';

const LightTitle = styled.h1`
  font-size: 1.7rem;
  color: white;
  font-weight: 400;
`;

const DarkTitle = styled(LightTitle)`
  color: #222;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #222;
`;

export { LightTitle, DarkTitle, Paragraph }
