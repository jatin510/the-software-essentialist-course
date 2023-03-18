export default class PasswordValidator {
  public validate(password: string): boolean {
    // validate password length
    return this.hasValidateLength(password);
  }

  private hasValidateLength(password: string) {
    const passwordLength = password.length;
    return passwordLength >= 5 && passwordLength <= 15;
  }
}
