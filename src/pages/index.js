import React from 'react';
import styled from 'styled-components';
import { DarkTitle, Paragraph } from '../styles/styledPageComponents';
import HistoryLink from '../containers/sidebar/HistoryLink';

const Welcome = styled.h1`
	font-family: 'Titillium Web';
	font-weight: 300;
	margin: 0;
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

const SubLine = styled.span`
	height: 0;
	align-self: center;
	margin-top: 0.2rem;
	margin-left: 1vw;
	flex: 1;
	border-bottom: 1px solid ${props => props.theme.colorHighlight};
`;

const Look = styled.span`
	color: ${props => props.value || props.theme.colorHighlight};
	font-weight: 400;
	padding: 0 0.3rem;
`;

const ColorLink = styled(Look)`
	& a {
		font-size: 0.85rem;
		text-decoration: none;
		background: ${props => props.value || props.theme.colorHighlight};
		color: white;
		padding: 0.25rem 0.4rem;
		border-radius: 0.2rem;
		&:hover {
			opacity: 0.8;
			transition: opacity 80ms ease-in;
		}
	}
`;

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0 1.2rem;
	border-left: 1px solid black;
`;

const Resource = styled.li`
	white-space: nowrap;
	margin: 0;
`;

const FlexWrapper = styled.div`
	display: flex;
	& p {
		text-align: justify;
		margin: 0;
		margin-right: 1.2rem;
	}
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
		transition: border-color 160ms ease-out;
	}
`;


const furtherTech = ['Git', 'ES6', 'CSS-in-JS', 'React Transition Group', 'Express', 'socket.io', 'Mongoose', 'passportJS', 'HelmetJS', 'Webpack', 'CSS3', 'HTML5', 'Pen and Paper'];

const resources = [{
		name: 'freeCodeCamp',
		type: 'learning platform',
		url: 'https://www.freecodecamp.org/'
	},
	{
		name: 'Programming Languages', 
		type: 'course',
		url: 'https://www.coursera.org/learn/programming-languages'
	},
	{
		name: "You Don't Know JS",
		type: 'book series',
		url: 'https://www.amazon.com/You-Dont-Know-Js-Book/dp/B01AY9P0P6'
	},
	{
		name: 'Composing Software',
		type: 'book',
		url: 'https://leanpub.com/composingsoftware'
	}
]

export default () => (
  <div>
    <Welcome>Hello, I'm <Look value='#AAC14F'>Philip Hradecsni</Look></Welcome>
    <Subtitle><span>Javascript Developer / Designer</span><SubLine /></Subtitle>
    <Paragraph emphasis>
    	Based in the Austrian woodlands close to the city of Vienna, I am developing <b>frontend and backend</b> applications using responsibly <b>state of the art technologies</b> to create <b>meaningful and effortless</b> user experiences that bring about the best of our users.
    </Paragraph>
    <Paragraph>
    	 I'm currently designing my work around <Look value='#357CC9'>React</Look>, <Look value='#026E00'>Node</Look>, <Look value='#62A999'>MongoDB</Look> and <Look value='#CC624E' bold>D3</Look> with a broad set of related technologies, frameworks, tools and packages to leverage efficiency, flexibility, maintainability, scalability, security and personal well-being.
    </Paragraph>
    <Paragraph>
    	 Namely: {furtherTech.map((t, i) => (
    	 	<span>
    	 		{i !== 0 && ' / '}
    	 		<Look value='black' key={t}>{t}</Look>
    	 	</span>
    	 ))} and more.
    </Paragraph>
    <Paragraph emphasis>
  		Straight to my projects catalogue → <ColorLink>
					<HistoryLink to='/projects'>View my projects</HistoryLink>
				</ColorLink>
    </Paragraph>
    <Paragraph>
    	Even before setting off to become a developer I have been designing my own learning trajectories full sail, persistently carried by a <b>wholehearted curiosity</b> to better understand how we shape the world we live in, yearning for <b>more creative and sustainable approaches</b> in dealing with intricate problems - able to <b>break free of debilitating patterns</b> both small and large scale.
  	</Paragraph>
  	<FlexWrapper>
  		<Paragraph>
  		 Working on <b>hands-on projects</b> while paying very <b>close attention to the fundamentals</b> has tought me to ask the right questions and develop a <b>reliable intuition for problem solving</b> and <b>choosing the right tools</b>. Here's a list of some notable resources that were seminal to my education.
	  	</Paragraph>
	  	<List>
	  		{resources.map(item => 
	  			<Resource key={item.name}>
	  				<a href={item.url} target='_blank' rel='noopener noreferrer'>{item.name}</a> - {item.type}
	  			</Resource>)}
	  	</List>
  	</FlexWrapper>
  	<Paragraph emphasis>
  		Here's my CV → <ColorLink>
  			<HistoryLink to='/cv'>Download CV</HistoryLink>
  		</ColorLink>
  	</Paragraph>
  	<Paragraph>
    	Coming from a background in the NGO and Social Entrepreneurship environment I am well aware of the <b>importance of a well-functioning team</b> - to deliver even when resources are scarce. I'm <b>sensible to the needs of the group</b> and will naturally try to come up with ways of <b>improving the quality</b> of our collaboration.
  	</Paragraph>
  	<Paragraph>
  		There are several core disciplines/ways of thinking that I can put to the table when working on a given project. <b>Diversity of thought</b> helps me frame the problem at hand in a way that yields <b>creative solutions</b> and <b>effective strategies</b> that can not be found in any particular discipline alone.
  	</Paragraph>
  	<Paragraph emphasis>
  		See what's on my mind → <ColorLink>
	  			<HistoryLink to='/mind'>Mindmap</HistoryLink>
	  		</ColorLink>
  	</Paragraph>
  	<FlexWrapper>
  	<Paragraph>
  		<b>Let's get to work!</b> I'm currently open to be hired.<br />As much as do I enjoy the silence - <b>team work</b> is where I flourish.
  	</Paragraph>
  	<Email href='mailto:baumzeit@posteo.me'>baumzeit@posteo.me</Email>
  	</FlexWrapper>
  </div>
)

// <Paragraph>
// 			I believe that the interplay of <b>empowering user experiences, meaningful conveyance of data, non-obstrusive tools for collaboration</b> and <b>maintaining a healthy degree of critical thinking</b> is key for organisations/communities to become more resilient and able to respond to systemic inbalances more effectively.
//     </Paragraph>
