export default class FizzBuzz {
  get(input: number): string {
    if (input % 3 == 0) {
      return "Fizz";
    } else {
      return input + "";
    }
  }
}
