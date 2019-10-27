import React from 'react';
import styled from 'styled-components';
import { LightTitle, Paragraph, Email, Bold } from '../styles/styledPageComponents';

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -2vw;
`;

const ProppedAnchor = ({children, href}) => (<a href={href} target='_blank' rel='noreferrer noopener'>{children}</a>)

const FindMe = styled.img`
  width: 78%;
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
      Apart from coding I like to spend my time playing boardgames and video games, listening to good music and walking around in nature.<br/>
        You will usually find me at these Meetups: <ProppedAnchor href='https://www.meetup.com/uxvienna/'>Vienna UX & Design</ProppedAnchor>, <ProppedAnchor href='https://www.meetup.com/ondataanddesign-vienna/'>On data and design – Vienna</ProppedAnchor>, <ProppedAnchor href='https://www.meetup.com/Vienna-Game-Dev-Meetup/'>Vienna GameDev Meetup</ProppedAnchor>, <ProppedAnchor href='https://www.meetup.com/ReactVienna/'>React Vienna</ProppedAnchor>, <ProppedAnchor href='https://www.meetup.com/Free-Code-Camp-Vienna/'>freeCodeCamp Vienna</ProppedAnchor> or get in touch via email or messenger.
    </Paragraph>
    <Email href='mailto:baumzeit@posteo.me'>baumzeit@posteo.me</Email>
    <Paragraph emphasis>
      This is a placeholder image.<br/>I'm working on a neat gallery for my upcoming projects.
    </Paragraph>
    <FlexWrapper>
      <FindMe src='/other/contact_placeholder.png' alt='contact placeholder' />
    </FlexWrapper>
  </div>
)