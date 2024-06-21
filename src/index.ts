import { createRoot } from 'react-dom/client';
import { createElement } from 'react';

import { Root } from '$/components';

export const root = createRoot(document.getElementById('root')!);

export const render = () => root.render(createElement(Root));

export default document.fonts.ready.then(render);
