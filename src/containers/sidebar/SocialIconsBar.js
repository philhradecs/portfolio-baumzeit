import React from 'react';
import styled from 'styled-components';
import { config } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faGoodreadsG, faFacebook } from '@fortawesome/free-brands-svg-icons';
import LinkedIcon from './LinkedIcon';

config.autoAddCss = false;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export default ({ noCaption }) => (
  <IconWrapper>
    <LinkedIcon icon={faFacebook} name='facebook' url='https://www.facebook.com/philip.hradecsni/' 
      noCaption={noCaption} className='socialIcon'/>
    <LinkedIcon icon={faGoodreadsG} name='goodreads' url='https://www.goodreads.com/user/show/59322468-philip-hradecsni/' 
      noCaption={noCaption} className='socialIcon'/>
    <LinkedIcon icon={faGithub} name='github' url='https://github.com/baumzeit/' 
      noCaption={noCaption} className='socialIcon'/>
  </IconWrapper>
)