export class PasswordValidator {
  public static validate(password: string) {
    return { result: false, errors: ["InvalidLengthError"] };
  }
}
