export default class FizzBuzz {
  get(input: number): string {
    let s = "";

    // handle number divisible by 3
    if (input % 3 === 0) {
      s += "Fizz";
    }

    // handle number divisible by 5
    if (input % 5 == 0) {
      s += "Buzz";
    }

    // if number is not divisible by 3 or 5
    if (s.length === 0) {
      s += input;
    }

    return s;
  }
}
