import { Anchor } from '$/components/widgets';

import type Component from './types';

export default (function Header({ className }) {
  return (
    <header className={className}>
      <h1>
        <Anchor href="/" title="Bower Search">
          Bower Search
        </Anchor>
      </h1>
      <p>
        <span>Powered by </span>
        <Anchor
          href="https://libraries.io/"
          target="_blank"
          title="Go to libraries.io"
        >
          libraries.io
        </Anchor>
        <span>.</span>
      </p>
    </header>
  );
} as Component);
