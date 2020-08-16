import { startOfDay, isBefore, differenceInDays } from 'date-fns';

export class DateRange {
  public readonly left: Date;
  public readonly right: Date;

  private constructor(left: Date, right: Date) {
    this.left = left;
    this.right = right;
  }

  public static create(left: Date, right: Date) {
    return new DateRange(startOfDay(left), startOfDay(right));
  }

  isValidRange() {
    return !isBefore(this.right, this.left);
  }

  countDays() {
    return differenceInDays(this.right, this.left);
  }
}
