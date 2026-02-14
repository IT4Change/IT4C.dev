import { createDefaultEsmPreset } from 'ts-jest'

const presetConfig = createDefaultEsmPreset()

/** @type {import('jest').Config} */
export default {
  ...presetConfig,
  testEnvironment: 'node',
  setupFiles: ['./jest/setup.loadEnv.ts'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  modulePathIgnorePatterns: ['<rootDir>/build/'],
}
