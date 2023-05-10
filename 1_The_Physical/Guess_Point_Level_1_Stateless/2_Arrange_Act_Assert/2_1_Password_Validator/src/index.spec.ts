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
});
