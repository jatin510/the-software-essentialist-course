import { PasswordValidator } from "./index";

describe("password validator", () => {
  it("it return an invalid length error for password length lesser than 5", () => {
    // arrange
    const password = "mom";

    // act
    const response = PasswordValidator.validate(password);

    // assert
    expect(response.result).toBe(false);
    expect(response.errors.length).toEqual(1);
    expect(response.errors[0]).toEqual("InvalidLengthError");
  });

  it("return an invalid length error for password length greater than 15", () => {
    // arrange
    const password = "hellohowareyouhopeyoudoingwell";

    // act
    const response = PasswordValidator.validate(password);

    // assert
    expect(response.result).toBe(false);
    expect(response.errors.length).toEqual(1);
    expect(response.errors[0]).toEqual("InvalidLengthError");
  });

  it("return result as true and response of errors array to be 0", () => {
    // arrange
    const password = "helloworld";

    // act
    const response = PasswordValidator.validate(password);

    // assert
    expect(response.result).toBe(true);
    expect(response.errors.length).toEqual(0);
  });
});
