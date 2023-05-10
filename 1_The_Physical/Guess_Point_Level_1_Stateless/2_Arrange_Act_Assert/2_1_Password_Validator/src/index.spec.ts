import { PasswordValidator, ValidatePasswordResponse } from "./index";

describe("password validator", () => {
  it("it return an invalid length error for password length lesser than 5", () => {
    // arrange
    const password = "mom";

    // act
    const response: ValidatePasswordResponse = PasswordValidator.validate(password);

    // assert
    expect(response.result).toBe(false);
    expect(response.errors.length).toBeGreaterThanOrEqual(1);
    expect(response.errors).toContain("InvalidLengthError");
  });

  it("return an invalid length error for password length greater than 15", () => {
    // arrange
    const password = "hellohowareyouhopeyoudoingwell";

    // act
    const response: ValidatePasswordResponse = PasswordValidator.validate(password);

    // assert
    expect(response.result).toBe(false);
    expect(response.errors.length).toBeGreaterThanOrEqual(1);
    expect(response.errors).toContain("InvalidLengthError");
  });

  it("return result as true and response of errors array to be 0", () => {
    // arrange
    const password = "hello1world";

    // act
    const response: ValidatePasswordResponse = PasswordValidator.validate(password);

    // assert
    expect(response.result).toBe(true);
    expect(response.errors.length).toEqual(0);
  });

  it("returns an error when the password does not contain atLeast 1 digit", () => {
    const password = "helloworld";

    const response: ValidatePasswordResponse = PasswordValidator.validate(password);

    expect(response.result).toBe(false);
    expect(response.errors.length).toBeGreaterThanOrEqual(1);
    expect(response.errors).toContain("MissingDigitError");
  });
});
