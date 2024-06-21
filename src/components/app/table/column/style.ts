import styled from 'styled-components';

export default (component) => styled(component)`
  background-color: rgba(255, 122, 61, 0.5);
  padding: 1rem;

  &[aria-sort] {
    background-color: rgba(255, 122, 61, 1);
  }
`;
