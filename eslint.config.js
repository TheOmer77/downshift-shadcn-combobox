import eslint from '@eslint/js';
// eslint-disable-next-line import-x/default
import prettier from 'eslint-config-prettier';
import importX from 'eslint-plugin-import-x';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tailwind from 'eslint-plugin-tailwindcss';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import { checkFile } from './src/config/eslint/rules/check-file.mjs';
import { preferArrow } from './src/config/eslint/rules/prefer-arrow.mjs';
import { preferTemplate } from './src/config/eslint/rules/prefer-template.mjs';
import { restrictedImports } from './src/config/eslint/rules/restricted-imports.mjs';
import { sortImports } from './src/config/eslint/rules/sort-imports.mjs';

const config = tseslint.config(
  eslint.configs.recommended,
  // eslint-disable-next-line import-x/no-named-as-default-member
  ...tseslint.configs.recommended,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactRefresh.configs.vite,
  ...tailwind.configs['flat/recommended'],
  prettier,

  checkFile,
  preferArrow,
  sortImports,
  preferTemplate,
  restrictedImports,

  {
    files: ['**/*.{ts,tsx}'],
    plugins: { 'react-hooks': reactHooks },
    rules: reactHooks.configs.recommended.rules,
    settings: { tailwindcss: { callees: ['clsx', 'cn', 'cva'] } },
    languageOptions: { ecmaVersion: 2020, globals: globals.browser },
  }
);

export default config;
