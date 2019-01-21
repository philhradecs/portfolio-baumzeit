import React from 'react';
import styled from 'styled-components';
import FilterButton from './FilterButton';

const filters = [
  {
    key: 'React',
    color: '#61DAFB'
  },
  {
    key: 'D3',
    color: '#CC624E'
  },
  {
    key: 'vanillaJS',
    color: '#e80a89'
  },
  {
    key: 'Node',
    color: '#026E00'
  },
  {
    key: 'MongoDB',
    color: '#92D9C9'
  },
  {
    key: 'API',
    color: 'slategray'
  },
  {
    key: 'Responsive Design',
    color: '#4A8CFC'
  }
  
]

const BarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: sticky;
  top: 0.5rem;
  margin-bottom: 2rem;
  margin-left: -1rem;
  z-index: 1;
`;

export default ({ filterToggle }) => (
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