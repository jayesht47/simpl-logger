const log = require("../index");

test("console logged with ERROR", () => {
  const consoleSpy = jest.spyOn(console, "log");
  const testError = new Error("Sample Error Object");
  log("Test Message", "ERROR", testError);
  expect(consoleSpy.mock.calls[0][0].includes("ERROR")).toBe(true);
  expect(consoleSpy.mock.calls[0][0].includes("Test Message")).toBe(true);
  expect(consoleSpy.mock.calls[0][0].includes("Sample Error Object")).toBe(
    true
  );
});

test("console logged with INFO", () => {
  const consoleSpy = jest.spyOn(console, "log");
  log("Test INFO Message", "INFO");
  expect(consoleSpy.mock.calls[1][0].includes("INFO")).toBe(true);
  expect(consoleSpy.mock.calls[1][0].includes("Test INFO Message")).toBe(true);
  expect(consoleSpy.mock.calls[1][0].includes("Sample Error Object")).toBe(
    false
  );
});

test("console logged with DEBUG", () => {
  const consoleSpy = jest.spyOn(console, "log");
  log("Test DEBUG Message", "DEBUG");
  expect(consoleSpy.mock.calls[2][0].includes("DEBUG")).toBe(true);
  expect(consoleSpy.mock.calls[2][0].includes("Test DEBUG Message")).toBe(true);
  expect(consoleSpy.mock.calls[2][0].includes("SampleE Error Object")).toBe(
    false
  );
});

test("console logged with TRACE", () => {
  const consoleSpy = jest.spyOn(console, "log");
  log("Test TRACE Message", "TRACE");
  expect(consoleSpy.mock.calls[3][0].includes("TRACE")).toBe(true);
  expect(consoleSpy.mock.calls[3][0].includes("Test TRACE Message")).toBe(true);
  expect(consoleSpy.mock.calls[3][0].includes("SampleE Error Object")).toBe(
    false
  );
});
