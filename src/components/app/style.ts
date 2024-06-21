import styled from 'styled-components';

export default (component) => styled(component)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 auto;
  max-width: 980px;
  position: relative;
  width: 100%;
`;
