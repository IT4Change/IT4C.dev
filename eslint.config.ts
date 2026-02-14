import config, { vue3 } from 'eslint-config-it4c'

export default [
  {
    ignores: ['coverage', 'backend', 'docs/.vuepress/.cache', 'docs/.vuepress/.temp', 'docs/.vuepress/dist'],
  },
  ...config,
  ...vue3,
]
