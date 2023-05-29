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

  it("should return max value", () => {
    // arrange
    const statsCalculator = new StatsCalculator([12, 1, 24, -4]);

    // act
    const result = statsCalculator.maxValue();

    // assert
    expect(result).toEqual(24);
  });

  it("should get the the length of the values", () => {
    // arrange
    const statsCalculator = new StatsCalculator([12, 1, 24, -4]);

    // act
    const result = statsCalculator.getCount();

    // assert
    expect(result).toEqual(4);
  });

  it("should get the average of all the values", () => {
    // arrange
    const statsCalculator = new StatsCalculator([1, 2, 3, 4]);

    // act
    const result = statsCalculator.getAverage();

    // assert
    expect(result).toEqual(2.5);
  });
});
