import type Component from './types';
import use from './hooks';

export default (function Module({ children, ...props }) {
  const { onClick } = use();

  return (
    <a {...props} onClick={onClick}>
      {children}
    </a>
  );
} as Component);
