import Palindrome from "./index";

describe("palindrome checker", () => {
  it("palindrome should be defined", () => {
    const palindrome = new Palindrome();

    expect(palindrome).toBeDefined();
  });

  it("should able to tell 'dad' is palindrome", () => {
    const palindrome = new Palindrome();

    const input = "dad";
    expect(
      palindrome.isPalindrome(input)
    ).toBeTruthy();
  });

  it("should be able to tell 'jatin' is not palindrome", () => {
    const palindrome = new Palindrome();

    const input = "jatin";

    expect(
      palindrome.isPalindrome(input)
    ).toBeFalsy();
  });
});
