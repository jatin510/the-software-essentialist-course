import Palindrome from "./index";

describe("palindrome checker", () => {
  let palindrome: Palindrome;

  beforeEach(() => {
    palindrome = new Palindrome();
  });
  it("palindrome should be defined", () => {
    expect(palindrome).toBeDefined();
  });

  it("should able to tell 'dad' is palindrome", () => {
    const input = "dad";
    expect(
      palindrome.isPalindrome(input)
    ).toBeTruthy();
  });

  it("should be able to tell 'jatin' is not palindrome", () => {
    const input = "jatin";

    expect(
      palindrome.isPalindrome(input)
    ).toBeFalsy();
  });
});
