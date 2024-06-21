import { StrictMode } from 'react';
import { ThemeProvider as Theming } from 'styled-components';

import theme from '$/themes/default';
import { App, Style } from '$/components';

export default function Root() {
  return (
    <StrictMode>
      <Theming theme={theme}>
        <Style />
        <App />
      </Theming>
    </StrictMode>
  );
}
