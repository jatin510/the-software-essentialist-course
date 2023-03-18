export default class StatsCalculator {
  private _values: number[];

  constructor(values: number[]) {
    this._values = values;
  }

  minValue(): number {
    let minValue = Number.MAX_VALUE;

    for (let value of this._values) {
      if (value < minValue) {
        minValue = value;
      }
    }

    return minValue;
  }
}
