import BooleanCalculator from "./index";

describe("boolean calculator", () => {
  describe("Should be able to handle the single values", () => {
    it('"TRUE" should return "true"', () => {
      const expression = "TRUE";

      const response = BooleanCalculator.evaluate(expression);

      expect(response).toBeTruthy();
    });

    it('"FALSE" should return "false"', () => {
      const expression = "FALSE";

      const response = BooleanCalculator.evaluate(expression);

      expect(response).toBeFalsy();
    });
  });

  describe("Should be able to handle the NOT operator", () => {
    it('"NOT TRUE" should return "false"', () => {
      const expression = "NOT TRUE";

      const response = BooleanCalculator.evaluate(expression);

      expect(response).toBeFalsy();
    });

    it('"NOT FALSE" should return "true"', () => {
      const expression = "NOT FALSE";

      const response = BooleanCalculator.evaluate(expression);

      expect(response).toBeTruthy();
    });
  });

  describe("Should be able to handle the AND operator", () => {
    const expressions: [string, boolean][] = [
      ["TRUE AND TRUE", true],
      ["TRUE AND FALSE", false],
      ["FALSE AND TRUE", false],
      ["FALSE AND FALSE", false],
    ];

    expressions.forEach(([input, expectedOutput]) => {
      test(`Testing expression: ${input} should give ${expectedOutput}`, () => {
        expect(BooleanCalculator.evaluate(input)).toBe(expectedOutput);
      });
    });
  });

  describe("Should be able to handle the OR operator", () => {
    const expressions: [string, boolean][] = [
      ["TRUE OR TRUE", true],
      ["TRUE OR FALSE", true],
      ["FALSE OR TRUE", true],
      ["FALSE OR FALSE", false],
    ];

    expressions.forEach(([input, expectedOutput]) => {
      test(`Testing expression: ${input} should give ${expectedOutput}`, () => {
        expect(BooleanCalculator.evaluate(input)).toBe(expectedOutput);
      });
    });
  });

  describe("Should be able to handle the combination of operators with precedence of 'NOT' < 'AND' < 'OR'", () => {
    const expressions: [string, boolean][] = [
      ["TRUE OR TRUE OR TRUE AND FALSE", true],
      ["TRUE OR FALSE AND NOT FALSE", true],
    ];

    expressions.forEach(([input, expectedOutput]) => {
      test(`Testing expression: ${input} should give ${expectedOutput}`, () => {
        expect(BooleanCalculator.evaluate(input)).toBe(expectedOutput);
      });
    });
  });
});
