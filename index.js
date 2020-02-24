const { describe, it, expect, matchers } = require("./index.test");

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

describe("adder", () => {
  it("adds two numbers", () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });
});

describe("subtractor", () => {
  it("subtractor two numbers", () => {
    const result = subtract(4, 2);
    expect(result).toBe(2);
  });
});

describe("divider", () => {
  it("divide two numbers", () => {
    const result = subtract(4, 2);
    expect(result).toBe(2);
  });
});

describe("Multiplier", () => {
  it("Multiply two numbers", () => {
    const result = multiply(4, 2);
    expect(result).toBe(8);
  });
});
