import React from 'react';
import styled from 'styled-components';
import { faGithub, faFacebookF, faCodepen } from '@fortawesome/free-brands-svg-icons';
import LinkedIcon from './LinkedIcon';

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export default () => (
  <IconWrapper>
    <LinkedIcon icon={faFacebookF} name='facebook' url='https://www.facebook.com/philip.hradecsni' className='socialIcon'/>
    <LinkedIcon icon={faCodepen} name='codepen' url='https://codepen.io/baumzeit/' className='socialIcon'/>
    <LinkedIcon icon={faGithub} name='github' url='https://github.com/baumzeit/' className='socialIcon'/>
  </IconWrapper>
)