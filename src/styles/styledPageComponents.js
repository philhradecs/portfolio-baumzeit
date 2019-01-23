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

const Paragraph = styled.p`
	font-family: 'Roboto Slab';
	font-weight: 300;
  font-size: 0.95rem;
  margin: 1.5rem 0;
  line-height: 1.5;
  color: black;
  border-left: ${props => props.emphasis ? `1px dotted ${props.theme.colorHighlight}` : '' };
  padding-left: ${props => props.emphasis ? '0.6rem' : '0' };
  margin-left: ${props => props.emphasis ? '-0.6rem' : '0' }
`;

export { LightTitle, DarkTitle, Paragraph, Bold }
