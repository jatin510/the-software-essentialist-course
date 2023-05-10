export type ValidatePasswordResponse = {
  result: boolean;
  errors: string[];
};

const isValidLength = (password: string): boolean => {
  const length = password.length;

  return length >= 5 && length <= 15;
};

const hasDigit = (password: string) => {
  return password.split("").find((char: any) => !isNaN(char));
};

export class PasswordValidator {
  public static validate(password: string) {
    let errors = [];
    if (!isValidLength(password)) {
      errors.push("InvalidLengthError");
    }

    if (!hasDigit(password)) {
      errors.push("MissingDigitError");
    }
    return { result: errors.length === 0, errors };
  }
}
