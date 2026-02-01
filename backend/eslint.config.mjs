// eslint-disable-next-line n/no-unpublished-import
import config from 'eslint-config-it4c'

export default [
  { ignores: ['node_modules/', 'build/', 'coverage/'] },

  ...config,

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Import overrides for backend path aliases
      'import-x/no-relative-parent-imports': ['error', { ignore: ['#src/*', '#root/*'] }],
      'import-x/extensions': ['error', 'never', { json: 'always' }],
    },
  },
]
