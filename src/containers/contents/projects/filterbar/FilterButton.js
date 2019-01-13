import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  flex: 1;
  margin: 0 1rem;
  height: 100%;
  padding: 0.2rem 0.8rem;
  background: ${props => props.color};
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 0.3rem;

  &.active {
    border: 2px solid white;
  }
`;

export default ({ filterToggle, filter }) => (
  <Button onClick={filterToggle} id={filter.key} color={filter.color}>
    {filter.name}
  </Button>  
)