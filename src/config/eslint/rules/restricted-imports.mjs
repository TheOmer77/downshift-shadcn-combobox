/** @type {import("typescript-eslint").ConfigWithExtends} */
export const restrictedImports = {
  name: 'Restricted imports',
  rules: {
    '@typescript-eslint/no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['lucide-react'],
            importNamePattern: '^(Lucide.*|(?:(?!.*Icon$).+))$',
            message:
              "Only import icons that end with 'Icon' and don't start with 'Lucide'.",
            allowTypeImports: true,
          },
        ],
      },
    ],
  },
};
