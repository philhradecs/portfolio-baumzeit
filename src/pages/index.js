import React from 'react';
import styled from 'styled-components';
import {Paragraph, Bold, Email, ProppedAnchor} from '../styles/styledPageComponents';
import HistoryLink from '../containers/sidebar/HistoryLink';
import Delayed from '../containers/contents/projects/showlist/Delayed';

const colorHighlight = '#9fb55e';

const Welcome = styled.h1`
  font-family: 'Titillium Web';
  font-weight: 300;
  margin: 0;
  font-size: 2rem;
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
  opacity: 0.8;
  border-bottom: 1px solid ${colorHighlight};
`;

const Look = styled.span`
  color: ${props => props.value || 'black'};
  font-weight: 400;
  padding: 0 0.3rem;
`;

const ColorLink = styled(Look)`
  & a {
    white-space: nowrap;
    font-size: 0.85rem;
    text-decoration: none;
    background: ${props => props.value || colorHighlight};
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
  flex-direction: ${props => (props.theme.isMobile ? 'column' : 'row')};
  & p {
    text-align: justify;
    margin: 0;
    margin-right: 1.2rem;
    margin-bottom: ${props => (props.theme.isMobile ? '1rem' : '0')};
  }
`;

const HomeWrapper = styled.div`
  margin: ${props => (props.theme.isMobile ? '0' : '0 -2.2vw 0 -2.6vw')};
`;

const furtherTech = [
  'Git',
  'ES6',
  'CSS-in-JS',
  'Sass',
  'React Transition Group',
  'Express',
  'Templating Engines',
  'socket.io',
  'Mongoose',
  'passportJS',
  'HelmetJS',
  'Linting',
  'Mocha',
  'Chai',
  'Webpack',
  'CSS3',
  'HTML5',
  'Pen and Paper'
];

const resources = [
  {
    name: 'freeCodeCamp',
    type: 'learning platform',
    url: 'https://www.freecodecamp.org/'
  },
  {
    name: 'Programming Languages',
    type: 'course series',
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
  },
  {
    name: 'D3.js in Action',
    type: 'book',
    url: 'https://www.manning.com/books/d3js-in-action-second-edition'
  }
];

export default () => (
  <HomeWrapper>
    <Welcome>
      Hello, I'm <Look value={colorHighlight}>Philip Hradecsni</Look>
    </Welcome>
    <Subtitle>
      <span>Javascript Developer / Designer</span>
      <SubLine />
    </Subtitle>
    <Delayed waitBeforeShow={260}>
      <Paragraph emphasis>
        Based in the Austrian woodlands close to the city of Vienna, I am
        developing <Bold>frontend and backend</Bold> applications using
        responsibly <Bold>state of the art technologies</Bold> to create{' '}
        <Bold>meaningful and effortless</Bold> user experiences that bring about
        the best of our users.
      </Paragraph>
      <Paragraph>
        I'm currently designing my work around{' '}
        <Look value="#357CC9">React</Look>,{' '}
        <Look value="#CC624E" bold>
          D3
        </Look>
        , <Look value="#026E00">Node</Look> and{' '}
        <Look value="#62A999">Apollo GraphQL</Look> with a broad set of related
        frameworks, tools and libraries to leverage efficiency, flexibility,
        maintainability, scalability, security and personal well-being.
      </Paragraph>
      <Paragraph>
        Namely:{' '}
        {furtherTech.map((t, i) => (
          <span key={t}>
            {i !== 0 && ' / '}
            <Look>{t}</Look>
          </span>
        ))}{' '}
        and more.
      </Paragraph>
      <Paragraph emphasis>
        Straight to my projects catalogue →{' '}
        <ColorLink>
          <HistoryLink to="/projects">View my projects</HistoryLink>
        </ColorLink>
      </Paragraph>
      <Paragraph>
        Even before setting off to become a developer I have been designing my
        own learning trajectories full sail, persistently carried by a{' '}
        <Bold>wholehearted curiosity</Bold> to better understand how we shape
        the world we live in, yearning for{' '}
        <Bold>more creative and sustainable approaches</Bold> in dealing with
        difficult problems - able to{' '}
        <Bold>break free of constraining patterns</Bold> both small and large
        scale.
      </Paragraph>
      <FlexWrapper>
        <Paragraph>
          Working on <Bold>hands-on projects</Bold> while paying very{' '}
          <Bold>close attention to the fundamentals</Bold> has tought me to ask
          the right questions and formed an{' '}
          <Bold>intuition for identifying problems</Bold> and{' '}
          <Bold>choosing the right tools to solve them</Bold>. I put together a
          small list of notable resources that have been seminal to my ongoing
          education as a developer.
        </Paragraph>
        <List>
          {resources.map(item => (
            <Resource key={item.name}>
              <ProppedAnchor href={item.url}>
                {item.name}
              </ProppedAnchor>{' '}
              - {item.type}
            </Resource>
          ))}
        </List>
      </FlexWrapper>
      <Paragraph emphasis>
        Here's my CV →{' '}
        <ColorLink>
          <a
            href="/assets_cv/public_cv_philip_hradecsni.pdf"
            download
            media_type="application/pdf"
          >
            Download CV
          </a>
        </ColorLink>
      </Paragraph>
      <Paragraph>
        Coming from a background in the NGO and Social Entrepreneurship
        environment I am aware of the{' '}
        <Bold>importance of a well-functioning team</Bold> - to deliver even
        when resources are scarce. I'm{' '}
        <Bold>sensible to the state of the group</Bold> and will naturally come
        up with ways of <Bold>getting the most out of our collaboration</Bold>.
      </Paragraph>
      <Paragraph>
        My thinking has been shaped by a diverse set of disciplines/ways of
        seeing that I can readily put to the table when working on a given
        project. <Bold>Diversity of thought</Bold> helps me frame the problem at
        hand in ways that yield <Bold>creative solutions</Bold> and{' '}
        <Bold>effective strategies</Bold> that could not be found in any
        particular discipline alone.
      </Paragraph>
      <Paragraph emphasis>
        See what's on my mind →{' '}
        <ColorLink>
          <HistoryLink to="/mind">Mindmap</HistoryLink>
        </ColorLink>
      </Paragraph>
      <FlexWrapper>
        <Paragraph>
          <Bold>Let's get to work!</Bold> I'm currently working at <ProppedAnchor href="https://webundsoehne.com/">Web & Söhne</ProppedAnchor>.
          <br />
          As much as do I enjoy the silence - <Bold>team work</Bold> is where I
          flourish.
        </Paragraph>
        <Email href="mailto:baumzeit@posteo.me">baumzeit@posteo.me</Email>
      </FlexWrapper>
      <Paragraph>
        Are you looking for a project partner or someone to exchange ideas with?
        <br />
      </Paragraph>
      <Paragraph emphasis>
        Let's get something started →{' '}
        <ColorLink>
          <HistoryLink to="/contact">Get in touch</HistoryLink>
        </ColorLink>
      </Paragraph>
    </Delayed>
  </HomeWrapper>
);
