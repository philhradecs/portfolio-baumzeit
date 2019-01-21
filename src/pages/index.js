import React from 'react';
import styled from 'styled-components';
import { DarkTitle, Paragraph } from '../styles/styledPageComponents';

const filters = [
  {
    key: 'React',
    color: '#61DAFB'
  },
  {
    key: 'D3',
    color: '#CC624E'
  },
  {
    key: 'Node',
    color: '#026E00'
  },
  {
    key: 'MongoDB',
    color: '#92D9C9'
  },
  {
    key: 'API',
    color: 'slategray'
  },
  {
    key: 'Responsive Design',
    color: '#4A8CFC'
  },
  {
    key: 'vanillaJS',
    color: '#e80a89'
  },
  
]

const Welcome = styled.h1`
	font-weight: 300;
	margin-top: 2vh;
	margin-bottom: 0.5rem;
	font-size: 2.4rem;
	font-weight: 300;
`;

const Subtitle = styled.p`
	font-family: 'Roboto Slab';
	font-weight: 300;
	font-size: 1.1rem;
	margin-top: 0.5rem;
	margin-bottom: 2.6rem;
	margin-left: 0.8rem;
	display: flex;
`;

const Color = styled.span`
	color: ${props => props.value || 'palevioletred'};
`;

const ColorLink = styled.a`
	
`;

const SubLine = styled.span`
	height: 0;
	align-self: center;
	margin-top: 0.2rem;
	margin-left: 1vw;
	flex: 1;
	border-bottom: 1px solid palevioletred;
`

export default () => (
  <div>
    <Welcome>Hello, I'm <Color>Philip Hradecsni</Color></Welcome>
    <Subtitle><span>Javascript Developer / Designer</span><SubLine /></Subtitle>
    <Paragraph>
      Currently I'm working with <Color value='#357CC9'>React</Color>, <Color value='#026E00'>Node</Color> and <Color value='#CC624E'>D3</Color>
    </Paragraph>
    <Paragraph>
      Currently I'm working to create intuitive and accessible web experiences that makes interacting with data 
      a joy. collaboration the joy of living 
    </Paragraph>
    <Paragraph>
    	Lose john poor same it case do year we. Full how way even the sigh. Extremely nor furniture fat questions now provision incommode preserved. Our side fail find like now. Discovered travelling for insensible partiality unpleasing impossible she. Sudden up my excuse to suffer ladies though or. Bachelor possible marianne directly confined relation as on he. 

Entire any had depend and figure winter. Change stairs and men likely wisdom new happen piqued six. Now taken him timed sex world get. Enjoyed married an feeling delight pursuit as offered. As admire roused length likely played pretty to no. Means had joy miles her merry solid order. 
  	</Paragraph>
  	<Paragraph>
Questions explained agreeable preferred strangers too him her son. Set put shyness offices his females him distant. Improve has message besides shy himself cheered however how son. Quick judge other leave ask first chief her. Indeed or remark always silent seemed narrow be. Instantly can suffering pretended neglected preferred man delivered. Perhaps fertile brandon do imagine to cordial cottage. 

Contented get distrusts certainty nay are frankness concealed ham. On unaffected resolution on considered of. No thought me husband or colonel forming effects. End sitting shewing who saw besides son musical adapted. Contrasted interested eat alteration pianoforte sympathize was. He families believed if no elegance interest surprise an. It abode wrong miles an so delay plate. She relation own put outlived may disposed. 
  </Paragraph>
  </div>
)