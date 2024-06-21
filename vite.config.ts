import { cwd } from 'node:process';
import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import inspect from 'vite-plugin-inspect';
import react from '@vitejs/plugin-react-swc';

export const force = (variables) =>
  Object.entries(variables).reduce(register, {});

export const register = (stack, [key, value]) =>
  Object.assign(stack, { [situate(key)]: JSON.stringify(value) });

export const situate = (fragment: string) =>
  ['import', 'meta', 'env', fragment].join('.');

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, cwd());

  return {
    define: force(env),
    plugins: [react(), inspect()],
    resolve: {
      alias: [
        {
          find: '$',
          replacement: fileURLToPath(new URL('./src', import.meta.url)),
        },
      ],
    },
    root: './src',
    server: {
      open: true,
    },
    test: {
      environment: 'jsdom',
      globals: true,
      include: ['**/__tests__/*.*', '**/*.{test,spec}.?(c|m)[jt]s?(x)'],
      setupFiles: './tests/setup.js',
    },
  };
});
