import FizzBuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  let fizzbuzz: FizzBuzz;

  beforeEach(() => {
    fizzbuzz = new FizzBuzz();
  });

  it("fizzbuzz should be defined", () => {
    expect(fizzbuzz).toBeDefined();
  });

  it("should return 1 when given input of 1", () => {
    const response = fizzbuzz.get(1);

    expect(response).toEqual("1");
  });

  it("should return 2 when given input of 2", () => {
    const response = fizzbuzz.get(2);

    expect(response).toEqual("2");
  });

  it("should return 'Fizz' when given input of 3", () => {
    const response = fizzbuzz.get(3);

    expect(response).toEqual("Fizz");
  });

  it("should return 'Buzz' when given input of 5", () => {
    const response = fizzbuzz.get(5);

    expect(response).toEqual("Buzz");
  });

  it("should return 'FizzBuzz' when given input of 15", () => {
    const response = fizzbuzz.get(15);

    expect(response).toEqual("FizzBuzz");
  });
});
