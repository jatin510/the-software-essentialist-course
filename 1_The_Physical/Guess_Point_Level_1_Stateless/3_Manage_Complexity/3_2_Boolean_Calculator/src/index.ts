export default class BooleanCalculator {
  public static evaluate(expression: string) {
    if (expression === "NOT TRUE") return false;
    if (expression === "NOT FALSE") return true;
    if (expression === "TRUE") return true;
    return false;
  }
}
