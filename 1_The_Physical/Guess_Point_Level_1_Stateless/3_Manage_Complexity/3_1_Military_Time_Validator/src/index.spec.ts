import MilitaryTimeValidator from "./index";

describe("military time validator", () => {
  const militaryTimeValidator = new MilitaryTimeValidator();

  it('should tell "01:12 - 14:32" is valid military time  ', () => {
    const time = "01:12 - 14:32";

    const response = militaryTimeValidator.isValidTime(time);

    expect(response).toBe(true);
  });

  it('should tell "25:12 - 12:30" is not a valid military time, the start hour is more than or equal to 24', () => {
    const time = "25:12 - 12:30";

    const response = militaryTimeValidator.isValidTime(time);

    expect(response).toBe(false);
  });

  it('should tell "23:60 - 12:30" is not a valid military time, the start minute is more than or equal to 60 seconds', () => {
    const time = "23:60 - 12:30";

    const response = militaryTimeValidator.isValidTime(time);

    expect(response).toBe(false);
  });

  it('should tell "23:10 - 26:30" is not a valid military time, the end hour is more than or equal to 60 seconds', () => {
    const time = "23:10 - 26:30";

    const response = militaryTimeValidator.isValidTime(time);

    expect(response).toBe(false);
  });

  it('should tell "23:10 - 21:70" is not a valid military time, the end hour is more than or equal to 60 seconds', () => {
    const time = "23:10 - 21:70";

    const response = militaryTimeValidator.isValidTime(time);

    expect(response).toBe(false);
  });
});
