export default class FizzBuzz {
  get(input: number): string {
    if (input % 3 == 0) {
      return "Fizz";
    } else if (input % 5 == 0) {
      return "Buzz";
    } else {
      return input + "";
    }
  }
}
