import styled from 'styled-components';

export default (component) => styled(component)`
  position: relative;

  &::before {
    background-color: #ffcc2f;
    content: '';
    display: block;
    height: 100%;
    left: calc(((100vw - 100%) / 2) * -1);
    position: absolute;
    z-index: -1;
    width: 100vw;
    /*
    left: 50%;
    transform: translateX(-50%);
    */
  }
`;
