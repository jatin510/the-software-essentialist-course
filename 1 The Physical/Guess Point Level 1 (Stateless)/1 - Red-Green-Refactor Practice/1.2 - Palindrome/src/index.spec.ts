import Palindrome from "./index";

describe("palindrome checker", () => {
  it("palindrome should be defined", () => {
    const palindrome = new Palindrome();

    expect(palindrome).toBeDefined();
  });
});
