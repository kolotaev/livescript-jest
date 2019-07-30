module.exports = {
    moduleFileExtensions: [
      'js',
      'ls',
    ],
    transform: {
      '^.+\\.(ls)$': './index.js',
    },
    transformIgnorePatterns: [
      '/node_modules/'
    ],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    testMatch: [
      '**/*.spec.(js|jsx|ts|tsx|ls)'
    ],
  }
  