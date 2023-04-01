export default class MilitaryTimeValidator {
  public isValidTime(time: string) {
    const MAX_HOUR = 23;
    const MAX_MINUTE = 59;

    const startHour = Number.parseInt(time.slice(0, 2));
    const startMinute = Number.parseInt(time.slice(3, 5));

    const endHour = Number.parseInt(time.split("-")[1].split(":")[0]);
    const endMinute = Number.parseInt(time.split("-")[1].split(":")[1]);

    return startHour <= MAX_HOUR && startMinute <= MAX_MINUTE && endHour <= MAX_HOUR && endMinute <= MAX_MINUTE;
  }
}
