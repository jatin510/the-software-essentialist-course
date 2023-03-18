import StatsCalculator from "./index";

describe("stats calculator", () => {
  it("status calculator instance should be defined", () => {
    const statsCalculator = new StatsCalculator([]);

    expect(statsCalculator).toBeDefined();
  });
});
