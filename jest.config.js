module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/src/@types',
    '<rootDir>/src/assets',
    '<rootDir>/src/config',
    '<rootDir>/src/gql',
  ],
  moduleDirectories: [
    '<rootDir>/node_modules',
    '<rootDir>/src',
  ],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    '<rootDir>/src/config/tests.tsx',
  ],
  testEnvironment: 'jsdom',
  transform: {
    '\\.(gql|graphql)$': '@graphql-tools/jest-transform',
  },
  verbose: true
};
