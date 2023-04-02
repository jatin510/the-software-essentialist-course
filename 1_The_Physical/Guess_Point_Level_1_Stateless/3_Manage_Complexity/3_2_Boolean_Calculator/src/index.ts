export default class BooleanCalculator {
  public static evaluate(expression: string): boolean {
    expression = expression.toLowerCase();


    if (expression.includes("or")) {
      const [leftExpression, rightExpression] = expression.split(" or ");
      return this.evaluate(leftExpression) || this.evaluate(rightExpression);
    }

    if (expression.includes("and")) {
      const [leftExpression, rightExpression] = expression.split(" and ");
      return this.evaluate(leftExpression) && this.evaluate(rightExpression);
    }

    if (expression === "not true") return false;
    if (expression === "not false") return true;
    if (expression === "true") return true;
    return false;
  }
}
