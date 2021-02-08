module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'js'],
  moduleDirectories: ['node_modules'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,ts,tsx}'],
};
