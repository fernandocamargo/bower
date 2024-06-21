import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('A falsy statement', () => {
  it('Should be equal to 2 (component)', () => {
    render(<p>Lorem ipsum</p>);

    expect(false).toEqual(false);
  });
});
