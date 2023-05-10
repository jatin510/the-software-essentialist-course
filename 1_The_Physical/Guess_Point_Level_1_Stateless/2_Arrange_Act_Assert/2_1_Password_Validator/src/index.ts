const isValidLength = (password: string): boolean => {
  const length = password.length;

  return length >= 5 && length <= 15;
};

export class PasswordValidator {
  public static validate(password: string) {
    if (isValidLength(password)) {
      return { result: true, errors: [] };
    }

    return { result: false, errors: ["InvalidLengthError"] };
  }
}
