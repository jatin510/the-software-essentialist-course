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

  maxValue(): number {
    let maxValue = Number.MIN_VALUE;

    for (let value of this._values) {
      if (value > maxValue) {
        maxValue = value;
      }
    }
    return maxValue;
  }

  getCount(): number {
    return this._values.length;
  }

  getAverage(): number {
    const sum = this._values.reduce((acc, value) => {
      return acc + value;
    }, 0);

    return sum / this.getCount();
  }
}
