module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["**/__tests__/(*.)+(spec|test).[jt]s?(x)"],
  collectCoverage: false,
};
