import React from 'react';
import styled from 'styled-components';
import { LightTitle, Paragraph, Email, Bold } from '../styles/styledPageComponents';

const FindMe = styled.img`
  width: 100%;
`;

export default () => (
  <div>
    <LightTitle>Contact</LightTitle>
    <Paragraph>
      Thanks for your interest. There are so <Bold>many things worth exploring</Bold> and <Bold>groundbreaking connections</Bold> to be made.<br/>
      What is possible with digital technology? How does it shape our daily routines? Does it help us live good and healthy lives together and are we able to handle it? 
    </Paragraph>
    <Paragraph emphasis>
      I wonder: Given the circumstances .. <Bold>What does it really take</Bold> for any new digital product to be adopted <Bold>appreciatively</Bold> and <Bold>responsibly</Bold>, helping people <Bold>thrive not turning on themselves and nature</Bold>?
    </Paragraph>
    <Paragraph>
      Apart from coding I like to spend my time playing boardgames and videogames, listening to good music and walking around in nature.<br/>
      You can meet me at <a href='https://www.meetup.com/de-DE/Free-Code-Camp-Vienna/' target='_blank' rel='noreferrer noopener'>freeCodeCamp Vienna Meetups</a> or get in touch via email or messenger.
    </Paragraph>
    <Email href='mailto:baumzeit@posteo.me'>baumzeit@posteo.me</Email>
    <Paragraph emphasis>
      This is a placeholder image. I'm working on a neat gallery of my upcoming projects.
    </Paragraph>
    <FindMe src='/other/contact_placeholder.png' alt='contact placeholder' />
  </div>
)