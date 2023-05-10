type PasswordError = "InvalidLengthError" | "MissingDigitError" | "MissingUppercaseError";

export type ValidatePasswordResponse = {
  result: boolean;
  errors: PasswordError[];
};

const isValidLength = (password: string): boolean => {
  const length = password.length;

  return length >= 5 && length <= 15;
};

const hasDigit = (password: string) => {
  return password.split("").find((char: any) => !isNaN(char));
};

const hasUpperCase = (password: string) => {
  return password
    .split("")
    .filter((char: any) => isNaN(char))
    .find((char: string) => char === char.toUpperCase());
};

export class PasswordValidator {
  public static validate(password: string) {
    let errors: PasswordError[] = [];
    if (!isValidLength(password)) {
      errors.push("InvalidLengthError");
    }

    if (!hasDigit(password)) {
      errors.push("MissingDigitError");
    }

    if (!hasUpperCase(password)) {
      console.log("hhello");
      errors.push("MissingUppercaseError");
    }

    return { result: errors.length === 0, errors };
  }
}
