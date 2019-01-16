import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  flex: 1;
  white-space: nowrap;
  margin-left: 1rem;
  height: 100%;
  padding: 0.2rem 0.8rem;
  background: var(--body-bg);
  cursor: pointer;
  border: 2px solid ${props => props.color};
  border-radius: 0.3rem;
  
  &:hover, &.active {
    background: ${props => props.color};
    color: var(--body-bg);
    transition: background 80ms ease-out,
                color 80ms ease;
  }
`;

export default ({ filterToggle, filter }) => (
  <Button onClick={filterToggle} id={filter.key} color={filter.color}>
    {filter.key}
  </Button>  
)