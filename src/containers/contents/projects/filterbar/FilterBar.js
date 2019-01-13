import React from 'react';
import styled from 'styled-components';
import FilterButton from './FilterButton';

const filters = [
  {
    name: 'React',
    key: 'react',
    color: '#61DAFB'
  },
  {
    name: 'D3',
    key: 'd3',
    color: '#CC624E'
  },
  {
    name: 'Express',
    key: 'express',
    color: '#026E00'
  },
  {
    name: 'vanillaJS',
    key: 'vanillajs',
    color: '#e80a89'
  },
  {
    name: 'Responsive',
    key: 'responsive',
    color: '#4A8CFC'
  }
]

const BarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 1rem;
  background: rgba(0,0,0,0.2);
  padding: 1rem;
`;

export default ({filterToggle}) => (
  <BarWrapper>
    { filters.map(filter => (
      <FilterButton 
        key={filter.key}
        filter={filter}
        filterToggle={filterToggle}/>
      )
    )}
  </BarWrapper>  
)