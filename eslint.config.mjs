import { defineConfig } from 'eslint/config';
import eslintConfigSeek from 'eslint-config-seek';

export default defineConfig([
  ...eslintConfigSeek,
  {
    files: ['bin/**/*.cjs', 'lib/**/*.js'],
    rules: {
      'no-console': 0,
      'no-process-exit': 0,
    },
  },
  {
    ignores: ['**/dist'],
  },
  {
    languageOptions: {
      globals: {
        __PLAYROOM_GLOBAL__CONFIG__: true,
        __PLAYROOM_GLOBAL__STATIC_TYPES__: true,
      },
    },
  },
]);
