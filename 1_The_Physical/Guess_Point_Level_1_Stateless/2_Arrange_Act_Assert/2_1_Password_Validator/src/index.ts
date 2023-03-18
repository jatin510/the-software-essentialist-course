export default class PasswordValidator {
  public validate(password: string): boolean {
    // validate password length
    const isLengthValid = this.validateLength(password);
    if (!isLengthValid) {
      throw new RangeError("Invalid password: Length should be between 5-15 characters");
    }

    const containsDigit = this.validateForDigit(password);
    if (!containsDigit) {
      throw new Error("Invalid password: should contain atleast 1 digit");
    }

    return true;
  }

  private validateLength(password: string): boolean {
    const passwordLength = password.length;
    return passwordLength >= 5 && passwordLength <= 15;
  }

  private validateForDigit(password: string): boolean {
    const hasNumber = /\d/;
    return hasNumber.test(password);
  }
}
