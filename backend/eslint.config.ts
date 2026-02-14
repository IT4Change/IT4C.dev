import config, { jest } from 'eslint-config-it4c'

export default [
  { ignores: ['build/', 'coverage/'] },
  ...config,
  ...jest,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['jest.config.ts', 'jest/*.ts', 'src/*.spec.ts', 'src/*.test.ts'],
          defaultProject: './tsconfig.eslint.json',
        },
      },
    },
  },
]
