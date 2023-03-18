import PasswordValidator from "./index";

describe("password validator", () => {
  let passwordValidator: PasswordValidator;

  beforeEach(() => {
    passwordValidator = new PasswordValidator();
  });

  it("passwordValidator instance should be defined", () => {
    expect(passwordValidator).toBeDefined();
  });

  it("If password length is between 5-15 characters, return true ", () => {
    // arrange
    const password = "Password1";

    // act
    const response = passwordValidator.validate(password);

    // assert
    expect(response).toBeTruthy();
  });

  it("If password length is not in length between 5-15 characters, throw range error ", () => {
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

  it("If password doesn't contain digit: throw error", () => {
    // arrange
    const password = "password";

    // act
    // arrange
    expect(() => {
      passwordValidator.validate(password);
    }).toThrowError();
    expect(() => {
      passwordValidator.validate(password);
    }).toThrowError(new Error("Invalid password: should contain atleast 1 digit"));
  });

  it("If password doesn't contain Uppercase letter: throw error", () => {
    // arrange
    const password = "password1";

    // act
    // arrange
    expect(() => {
      passwordValidator.validate(password);
    }).toThrowError();
    expect(() => {
      passwordValidator.validate(password);
    }).toThrowError(new Error("Invalid password: should contain uppercase character"));
  });
});
