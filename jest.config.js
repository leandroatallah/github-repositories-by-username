module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json",
    },
  },
}
