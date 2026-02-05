// eslint-disable-next-line n/no-unpublished-import
import config, { jest } from 'eslint-config-it4c'

export default [{ ignores: ['node_modules/', 'build/', 'coverage/'] }, ...config, ...jest]
