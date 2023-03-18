import PasswordValidator from "./index";

describe("password validator", () => {
  it("passwordValidator instance should be defined", () => {
    const passwordValidator = new PasswordValidator();

    expect(passwordValidator).toBeDefined();
  });

  it("If password length is between 5-15 characters, return true ", () => {
    const passwordValidator = new PasswordValidator();

    // arrange
    const password = "password";

    // act
    const response = passwordValidator.validate(password);

    // assert
    expect(response).toBeTruthy();
  });

  it("If password length is not in length between 5-15 characters, throw range error ", () => {
    const passwordValidator = new PasswordValidator();

    // arrange
    const password = "pass";

    // act
    // assert
    expect(() => {
      passwordValidator.validate(password);
    }).toThrowError();
    expect(() => {
      passwordValidator.validate(password);
    }).toThrowError(new RangeError("Invalid password: Length should be between 5-15 characters"));
  });
});
