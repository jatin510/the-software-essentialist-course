import { Stats } from "fs";
import StatsCalculator from "./index";

describe("stats calculator", () => {
  it("status calculator instance should be defined", () => {
    const statsCalculator = new StatsCalculator([]);

    expect(statsCalculator).toBeDefined();
  });

  it("should return minimum value", () => {
    // arrange
    const statsCalculator = new StatsCalculator([12, 1, 45, -4]);

    // act
    const result = statsCalculator.minValue();

    // assert
    expect(result).toEqual(-4);
  });
});
