import PasswordValidator from "./index";

describe("password validator", () => {
  it("passwordValidator instance should be defined", () => {
    const passwordValidator = new PasswordValidator();

    expect(passwordValidator).toBeDefined();
  });
});
