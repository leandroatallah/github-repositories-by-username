module.exports = {
  preset: "ts-jest",
  // testEnvironment: "node",
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)"],
}
