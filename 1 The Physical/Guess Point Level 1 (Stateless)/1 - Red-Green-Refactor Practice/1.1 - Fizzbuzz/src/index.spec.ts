import FizzBuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("fizzbuzz should be defined", () => {
    const fizzbuzz = new FizzBuzz();

    expect(fizzbuzz).toBeDefined();
  });

  it("should return 1 when given input of 1", () => {
    const fizzbuzz = new FizzBuzz();

    const response = fizzbuzz.get(1);

    expect(response).toEqual("1");
  });
});
