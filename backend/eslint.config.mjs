import config, { jest } from 'eslint-config-it4c'

export default [
  { ignores: ['build/', 'coverage/'] },
  ...config,
  ...jest,
  {
    languageOptions: {
      parserOptions: {
        projectService: false,
        project: './tsconfig.eslint.json',
      },
    },
  },
]
