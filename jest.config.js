module.exports = {
    moduleFileExtensions: [
      'js',
      'ls',
    ],
    transform: {
      '^.+\\.spec.ls$': './index.js',
    },
    transformIgnorePatterns: [
      '/node_modules/'
    ],
    testMatch: [
      '**/*.spec.(js|jsx|ts|tsx|ls)'
    ],
  }
  