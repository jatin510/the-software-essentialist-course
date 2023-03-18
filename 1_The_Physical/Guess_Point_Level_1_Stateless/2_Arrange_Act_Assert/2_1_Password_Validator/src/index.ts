export default class PasswordValidator {
  public validate(password: string): boolean {
    // validate password length
    const isLengthValid = this.validateLength(password);
    if (!isLengthValid) {
      throw new RangeError("Invalid password: Length should be between 5-15 characters");
    }

    return true;
  }

  private validateLength(password: string) {
    const passwordLength = password.length;
    return passwordLength >= 5 && passwordLength <= 15;
  }
}
