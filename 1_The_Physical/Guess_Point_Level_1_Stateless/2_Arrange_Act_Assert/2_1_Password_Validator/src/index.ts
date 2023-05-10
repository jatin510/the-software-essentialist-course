export class PasswordValidator {
  public static validate(password: string) {
    const length = password.length;

    if (length >= 5 && length <= 15) {
      return { result: true, errors: [] };
    }

    return { result: false, errors: ["InvalidLengthError"] };
  }
}
