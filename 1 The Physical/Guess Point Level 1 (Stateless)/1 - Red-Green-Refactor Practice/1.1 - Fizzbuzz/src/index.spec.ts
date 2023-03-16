import FizzBuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("fizzbuzz should be defined", () => {
    const fizzbuzz = new FizzBuzz();

    expect(fizzbuzz).toBeDefined();
  });
});
