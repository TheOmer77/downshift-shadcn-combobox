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
          ['^hono', '^react', '^next', '^next/.*', '^@?\\w'],
          ['^@repo/.*'],
          [
            '^@/components/ui/.*',
            '^@/components/(?!ui).*',
            '^@/hooks(/.*)?',
            '^@/routes(/.*)?',
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
