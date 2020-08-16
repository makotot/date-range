import { DateRange } from '../src';

describe('DateRange', () => {
  describe('isValidRange', () => {
    test('Return true if the right date is after of the left date', () => {
      const dateRange = DateRange.create(
        new Date(2020, 8, 15),
        new Date(2020, 8, 16)
      );
      expect(dateRange.isValidRange()).toBe(true);
    });
    test('Return true if the two dates are same day', () => {
      const dateRange = DateRange.create(
        new Date(2020, 8, 15),
        new Date(2020, 8, 15)
      );
      expect(dateRange.isValidRange()).toBe(true);
    });
    test('Return false if the right date is before of the left date', () => {
      const dateRange = DateRange.create(
        new Date(2020, 8, 17),
        new Date(2020, 8, 16)
      );
      expect(dateRange.isValidRange()).toBe(false);
    });
  });

  describe('countDays', () => {
    test('Count days between the left date and right date', () => {
      const count = DateRange.create(
        new Date(2019, 8, 15),
        new Date(2020, 8, 14)
      ).countDays();
      expect(count).toBe(365);
    });
  });
});
