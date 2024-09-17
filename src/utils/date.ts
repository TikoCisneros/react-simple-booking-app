import moment from 'moment';

/**
 * Evaluates if one date is greater than another.
 *
 * @param {Date} dateToCompare - The date to compare against the reference date.
 * @param {Date} referenceDate - The reference date to compare to.
 * @returns {boolean} True if dateToCompare is greater than referenceDate, false otherwise.
 */
export function isDateGreaterThan(dateToCompare: Date, referenceDate: Date): boolean {
  const targetDate = moment(dateToCompare);
  const refDate = moment(referenceDate);

  return targetDate.isAfter(refDate);
}

/**
 * Evaluates if at least one of the provided dates is within the specified date range.
 *
 * @param {Date} startDate - The start date of the range.
 * @param {Date} endDate - The end date of the range.
 * @param {Date[]} dates - An array of dates to check.
 * @returns {boolean} True if at least one of the dates is within the range, false otherwise.
 */
export function isOneDateInRange(startDate: Date, endDate: Date, dates: Date[]): boolean {
  const start = moment(startDate);
  const end = moment(endDate);

  return dates.some((date) => moment(date).isBetween(start, end, null, '[]'));
}
