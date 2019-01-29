import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const hoverStyles = css`
  &:hover { 
    & .socialIcon {
      opacity: 0;
      transition: opacity 100ms ease;
    }
    & #caption {
      opacity: 1;
      color: ${props => props.theme.colorHighlight};
      transition: opacity 100ms ease,
                  color 100ms ease;
    }
  }
`;

const Anchor = styled.a`
  font-family: 'Nunito';
  text-decoration: none;
  min-height: 3.5rem;
  font-size: ${props => props.theme.wide ? '1.3rem' : '1.1rem'};
  font-weight: ${props => props.theme.wide ? '300' : '600' };
  opacity: 0.9;
  color: ${props => props.theme.wide ? 'white' : '#222'};
  text-align: center;
  cursor: pointer;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  ${({ noCaption }) =>
    !noCaption && hoverStyles
  }
`;

const CaptionWrapper = styled.div`
  display: ${props => props.noCaption ? 'none' : 'flex'};
  position: absolute;
  top: 0;
  height: 100%;
  font-size: 0.65em;
  align-items: center;
  justify-content: center;
`;

const Caption = styled.div`
  flex: 1;
  opacity: 0;
`;

export default ({ icon, url, name, noCaption }) => (
  <Anchor href={url} target="_blank" rel="noopener noreferrer" noCaption={noCaption}>
    <FontAwesomeIcon icon={icon} className='socialIcon'/>
    <CaptionWrapper noCaption={noCaption}>
      <Caption id="caption">{name}</Caption>
    </CaptionWrapper>
  </Anchor>
)