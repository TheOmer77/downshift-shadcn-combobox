import checkFilePlugin from 'eslint-plugin-check-file';

/** @type {import("typescript-eslint").ConfigWithExtends} */
export const checkFile = {
  name: 'Check file',
  plugins: { 'check-file': checkFilePlugin },
  rules: {
    'check-file/filename-naming-convention': [
      'warn',
      { '**/*.{ts,tsx}': 'KEBAB_CASE' },
      { ignoreMiddleExtensions: true },
    ],
    'check-file/folder-naming-convention': ['warn', { 'src/**': 'KEBAB_CASE' }],
  },
};
