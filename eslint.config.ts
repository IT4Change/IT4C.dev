import config, { vue3 } from 'eslint-config-it4c'

export default [
  {
    ignores: [
      'coverage',
      'backend',
      'docs/.vuepress/.cache',
      'docs/.vuepress/.temp',
      'docs/.vuepress/dist',
    ],
  },
  ...config,
  ...vue3,
  {
    files: ['**/*.cjs'],
    rules: {
      'import-x/no-commonjs': 'off',
    },
  },
  {
    rules: {
      'n/no-unpublished-import': 'off',
      'import-x/no-extraneous-dependencies': 'off',
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/html-self-closing': ['error', { html: { void: 'any' } }],
      'vue/singleline-html-element-content-newline': 'off',
    },
  },
]
