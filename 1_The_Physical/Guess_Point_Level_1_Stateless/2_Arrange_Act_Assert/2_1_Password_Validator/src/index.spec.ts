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
});
