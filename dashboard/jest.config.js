export default {
    testEnvironment: 'jsdom', // Use jsdom for React testing
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Setup file for Jest
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Use Babel to transform files
    },
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'], // Test file patterns
    "moduleNameMapper": {
        "\\.(css|scss|sass)$": "identity-obj-proxy"
    }

};