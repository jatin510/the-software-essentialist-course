export default class BooleanCalculator {
  public static evaluate(expression: string) {
    if (expression === "TRUE") {
      return true;
    } else {
      return false;
    }
  }
}
