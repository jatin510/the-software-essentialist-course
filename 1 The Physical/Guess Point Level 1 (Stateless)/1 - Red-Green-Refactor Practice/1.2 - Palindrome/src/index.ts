export default class Palindrome {
  public isPalindrome(input: string): boolean {
    const str = input.toLowerCase();

    return (
      str === str.split("").reverse().join("")
    );
  }
}
