import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  flex: 1;
  max-width: 12rem;
  font-family: 'Nunito';
  font-weight: 300;
  font-size: 1rem;
  white-space: nowrap;
  margin-left: 1rem;
  height: 100%;
  padding: 0.3rem 0.8rem;
  margin-bottom: 0.2rem;
  background: var(--body-bg);
  cursor: pointer;
  border: 2px solid ${props => props.color};
  border-radius: 0.3rem;
  
  &.enabled:hover, &.active {
    background: ${props => props.color};
    color: var(--body-bg);
    font-weight: 400;
    transition: background 80ms ease-out,
                font-weight 40ms ease-out,
                color 80ms ease;
  }
`;

export default ({ filterToggle, filter }) => {
  const handleWithStyle = (e) => {
    filterToggle(e);
    const btn = e.target;
    if (!btn.classList.contains('active')) {
      btn.classList.toggle('enabled', false)
      setTimeout(() => {
        btn.classList.toggle('enabled', true);
      }, 800);
    }
    
  }

  return (
    <Button onClick={handleWithStyle} id={filter.key} color={filter.color} className="enabled">
      {filter.key}
    </Button>  
  )
}