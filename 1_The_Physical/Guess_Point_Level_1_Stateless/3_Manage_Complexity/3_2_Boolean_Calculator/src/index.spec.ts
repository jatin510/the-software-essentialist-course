import BooleanCalculator from "./index";

describe("boolean calculator", () => {
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
