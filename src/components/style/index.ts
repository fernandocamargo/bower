import { createGlobalStyle } from 'styled-components';

import { use } from '$/helpers/style';

export default createGlobalStyle`
  html,
  body,
  div#root {
    min-height: 100vh;
  }

  html {
    background-color: #fbfcfc;
    opacity: 1;
  }

  body {
    font-family: ${use('theme.typography.main')};
  }

  div#root {
    display: flex;
    flex-direction: column;
  }

  nav {
    h4 {
      display: none;
    }
  }

  pre {
    font-size: 0.75rem;
  }
`;
