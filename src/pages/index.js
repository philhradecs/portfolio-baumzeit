import React from 'react';
import styled from 'styled-components';
import { DarkTitle, Paragraph } from '../styles/styledPageComponents';
import HistoryLink from '../containers/sidebar/HistoryLink';

const Welcome = styled.h1`
	font-family: 'Titillium Web';
	font-weight: 300;
	margin: 0;
	font-size: 2.4rem;
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

const Bold = styled.span`
	font-weight: 400;
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
	border-left: 1px dotted black;
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
    	Based in the Austrian woodlands close to the city of Vienna, I am developing <Bold>frontend and backend</Bold> applications using responsibly <Bold>state of the art technologies</Bold> to create <Bold>meaningful and effortless</Bold> user experiences that bring about the best of our users.
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
    	Even before setting off to become a developer I have been designing my own learning trajectories full sail, persistently carried by a <Bold>wholehearted curiosity</Bold> to better understand how we shape the world we live in, yearning for <Bold>more creative and sustainable approaches</Bold> in dealing with difficult problems - able to <Bold>break free of debilitating patterns</Bold> both small and large scale.
  	</Paragraph>
  	<FlexWrapper>
  		<Paragraph>
  		 Working on <Bold>hands-on projects</Bold> while paying very <Bold>close attention to the fundamentals</Bold> has tought me to ask the right questions and formed an <Bold>intuition for identifying problems</Bold> and <Bold>choosing the right tools to solve them</Bold>. I put together a small list of notable resources that were seminal to my education as developer.
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
    	Coming from a background in the NGO and Social Entrepreneurship environment I am aware of the <Bold>importance of a well-functioning team</Bold> - to deliver even when resources are scarce. I'm <Bold>sensible to the needs of the group</Bold> and will naturally come up with ways of <Bold>improving the quality</Bold> and <Bold>joy</Bold> of our collaboration.
  	</Paragraph>
  	<Paragraph>
  		My thinking has been shaped by a handful of disciplines/ways of seing that I can readily put to the table when working on a given project. <Bold>Diversity of thought</Bold> helps me frame the problem at hand in a way that yields <Bold>creative solutions</Bold> and <Bold>effective strategies</Bold> that could not be found in any particular discipline alone.
  	</Paragraph>
  	<Paragraph emphasis>
  		See what's on my mind → <ColorLink>
	  			<HistoryLink to='/mind'>Mindmap</HistoryLink>
	  		</ColorLink>
  	</Paragraph>
  	<FlexWrapper>
  	<Paragraph>
  		<Bold>Let's get to work!</Bold> I'm currently looking to be hired.<br />As much as do I enjoy the silence - <Bold>team work</Bold> is where I flourish.
  	</Paragraph>
  	<Email href='mailto:baumzeit@posteo.me'>baumzeit@posteo.me</Email>
  	</FlexWrapper>
  	<Paragraph>
  		If you like to learn even a bit more about me and my other areas of interests please don't hesitate to find out.
  	</Paragraph>
  	<Paragraph emphasis>
  		Let's start something great → <ColorLink>
	  			<HistoryLink to='/contact'>Get in touch</HistoryLink>
	  		</ColorLink>
  	</Paragraph>
  </div>
)
