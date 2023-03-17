export default class Palindrome {
  public isPalindrome(input: string): boolean {
    return (
      input === input.split("").reverse().join("")
    );
  }
}
