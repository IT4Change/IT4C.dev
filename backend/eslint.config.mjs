// eslint-disable-next-line n/no-unpublished-import
import config from 'eslint-config-it4c'
// eslint-disable-next-line n/no-unpublished-import
import typescriptEslint from 'typescript-eslint'

export default [
  { ignores: ['node_modules/', 'build/', 'coverage/'] },

  ...config,

  // Type-checked TypeScript rules for backend
  // eslint-disable-next-line import-x/no-named-as-default-member
  ...typescriptEslint.configs.recommendedTypeChecked.map((c) => ({
    ...c,
    files: ['**/*.ts', '**/*.tsx'],
  })),
  // eslint-disable-next-line import-x/no-named-as-default-member
  ...typescriptEslint.configs.strictTypeChecked
    .filter((c) => c.rules)
    .map((c) => ({
      ...c,
      files: ['**/*.ts', '**/*.tsx'],
    })),
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Backend-specific type-checked rules
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],

      // Promise rules not covered by eslint-config-it4c
      'promise/catch-or-return': 'error',
      'promise/no-return-wrap': 'error',
      'promise/param-names': 'error',
      'promise/always-return': 'error',
      'promise/no-nesting': 'warn',
      'promise/no-promise-in-callback': 'warn',
      'promise/no-callback-in-promise': 'warn',
      'promise/no-new-statics': 'error',
      'promise/no-return-in-finally': 'warn',
      'promise/valid-params': 'warn',

      // Import overrides for backend path aliases
      'import-x/no-relative-parent-imports': ['error', { ignore: ['#src/*', '#root/*'] }],
      'import-x/extensions': ['error', 'never', { json: 'always' }],
      'import-x/no-deprecated': 'error',
    },
  },
]
