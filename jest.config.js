// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    verbose: true,
    testEnvironment: "node",
    clearMocks: true,
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/coverage/",
        "src/server.js",
        "src/utils/api/",
        "src/utils/caching/",
        "src/utils/logger/",
        "src/utils/config.js",
        "/dist/",
        ".eslint.js"
    ],
    collectCoverageFrom: [
        "src/**/*.js",
        "!data/keyMap.js",
        "!/node_modules/",
        "!/client/"
    ]
};

module.exports = config;