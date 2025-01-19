import simpleImportSort from 'eslint-plugin-simple-import-sort';

/** @type {import("typescript-eslint").ConfigWithExtends} */
export const sortImports = {
  name: 'Sort imports',
  plugins: { 'simple-import-sort': simpleImportSort },
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react', '^@?\\w'],
          [
            '^@/registry(/.*)?',
            '^@/components/ui/.*',
            '^@/components/(?!ui).*',
            '^@/hooks(/.*)?',
            '^@/utils(/.*)?',
            '^@/lib(/.*)?',
            '^@/config(/.*)?',
            '^@/constants(/.*)?',
            '^@/types(/.*)?',
            '^@/styles(/.*)?',
          ],
          [
            '^\\./?$',
            '^\\.(?!/?$)',
            '^\\./(?=.*/)(?!/?$)',
            '^\\.\\./?$',
            '^\\.\\.(?!/?$)',
          ],
        ],
      },
    ],
  },
};
