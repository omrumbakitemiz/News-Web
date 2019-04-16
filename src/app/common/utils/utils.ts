export class Utils {
  static fixUserTimeZoneOffset = (date: Date): Date => {
    if (!date) {
      return null;
    }
    const userTimezoneOffset = date.getTimezoneOffset() * 60000;
    const fixedDate = date.getTime() - userTimezoneOffset;
    return new Date(fixedDate);
  }
}
