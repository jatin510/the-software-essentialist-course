export default class BooleanCalculator {
  public static evaluate(expression: string): boolean {
    if (expression.includes("AND")) {
      const [leftExpression, rightExpression] = expression.split(" AND ");
      return this.evaluate(leftExpression) && this.evaluate(rightExpression);
    }
    if (expression === "NOT TRUE") return false;
    if (expression === "NOT FALSE") return true;
    if (expression === "TRUE") return true;
    return false;
  }
}
