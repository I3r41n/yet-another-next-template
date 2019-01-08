const TEST_REGEX = './test/.*.(jsx?|js?|tsx?|ts?)$'
module.exports = {
    setupTestFrameworkScriptFile: './rtl.setup.js',
    globals: {
        'ts-jest': {
            'useBabelrc': true
        }
    },
    testRegex: TEST_REGEX,
    rootDir: ".",
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testPathIgnorePatterns: [
        '<rootDir>/.next/', '<rootDir>/node_modules/'
    ],
    moduleFileExtensions: [
        'ts', 'tsx', 'js', 'jsx'
    ],
    collectCoverage: true
  };