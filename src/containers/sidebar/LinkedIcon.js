import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Anchor = styled.a`
  text-decoration: none;
  min-height: 3.5rem;
  font-size: ${props => props.theme.wide ? '1.4rem' : '1.1rem'};
  opacity: 0.9;
  color: ${props => props.theme.wide ? 'white' : '#222'};
  text-align: center;
  cursor: pointer;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & :hover { 
    & .socialIcon {
      opacity: 0;
      transition: opacity 200ms ease;
    }
    & #caption {
      opacity: 1;
      color: palevioletred;
      transition: opacity 250ms ease,
                  color 250ms ease;
    }
  }
`;

const CaptionWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  font-size: 0.65em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Caption = styled.div`
  flex: 1;
  opacity: 0;
`;

export default ({ icon, url, name }) => (
  <Anchor href={url} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={icon} className='socialIcon'/>
    <CaptionWrapper>
      <Caption id="caption">{name}</Caption>
    </CaptionWrapper>
  </Anchor>
)