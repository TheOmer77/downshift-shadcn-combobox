import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions';

/** @type {import("typescript-eslint").ConfigWithExtends} */
export const preferArrow = {
  name: 'Prefer arrow functions',
  plugins: { 'prefer-arrow-functions': preferArrowFunctions },
  rules: {
    'prefer-arrow-callback': 'warn',
    'prefer-arrow-functions/prefer-arrow-functions': [
      'warn',
      {
        allowNamedFunctions: false,
        classPropertiesAllowed: false,
        disallowPrototype: false,
        returnStyle: 'implicit',
        singleReturnOnly: false,
      },
    ],
  },
};
