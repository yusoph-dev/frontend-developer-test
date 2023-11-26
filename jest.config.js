module.exports = {
  moduleFileExtensions: ["js", "jsx"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    '\\.(png|jpg|webp|ttf|woff|woff2|svg|mp4)$': '<rootDir>/src/test/jest/__mocks__/fileMock.js',
    '\\.(css|scss|less)$': '<rootDir>/src/test/jest/__mocks__/styleMock.js',
  },
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  transformIgnorePatterns: ["node_modules\/(?!axios)"],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
