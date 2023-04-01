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
  });
});
