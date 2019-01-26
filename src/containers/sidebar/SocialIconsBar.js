import React from 'react';
import styled from 'styled-components';
import { faGithub, faGoodreadsG, faFacebook } from '@fortawesome/free-brands-svg-icons';
import LinkedIcon from './LinkedIcon';

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export default () => (
  <IconWrapper>
    <LinkedIcon icon={faFacebook} name='facebook' url='https://www.facebook.com/philip.hradecsni/' className='socialIcon'/>
    <LinkedIcon icon={faGoodreadsG} name='goodreads' url='https://www.goodreads.com/user/show/59322468-philip-hradecsni/' className='socialIcon'/>
    <LinkedIcon icon={faGithub} name='github' url='https://github.com/baumzeit/' className='socialIcon'/>
  </IconWrapper>
)