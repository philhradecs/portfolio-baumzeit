import styled from 'styled-components';

const LightTitle = styled.h1`
  font-size: 1.75rem;
  color: white;
  font-weight: 400;
`;

const DarkTitle = styled(LightTitle)`
  color: #222;
`;

const Bold = styled.span`
  font-weight: 400;
`;

const Email = styled.a`
  align-self: center;
  text-decoration: none;
  margin-left: 3rem;
  font-weight: 400;
  font-size: 1.5rem;
  color: black;
  &:hover {
    border-bottom: 1px solid ${props => props.theme.colorHighlight};
    transition: border 160ms ease-out;
  }
`;

const Paragraph = styled.p`
	font-family: 'Roboto Slab';
	font-weight: 300;
  font-size: 1rem;
  margin: 1.5rem 0;
  line-height: 1.5;
  color: black;
  border-left: ${props => props.emphasis ? `1px dotted ${props.theme.colorHighlight}` : '' };
  padding-left: ${props => props.emphasis ? '0.6rem' : '0' };
  margin-left: ${props => props.emphasis ? '-0.6rem' : '0' }
`;

export { LightTitle, DarkTitle, Paragraph, Bold, Email }
