export default class Palindrome {
  public isPalindrome(input: string): boolean {
    const str = input
      .replace(/ /g, "")
      .toLowerCase();

    return (
      str === str.split("").reverse().join("")
    );
  }
}
