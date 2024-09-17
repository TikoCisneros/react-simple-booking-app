import { DateReservationT, ReservationT } from '../models/reservation';
import { isEmptyArray } from '../utils/common';
import { isOneDateInRange } from '../utils/date';

/**
 * Evaluates if a hotel is reserved within a specified date range.
 *
 * @param {ReservationT[]} reservations - An array of reservations to check.
 * @param {DateReservationT} reservationRange - The date range to evaluate against the reservations.
 * @returns {boolean} True if the hotel is reserved within the specified range, false otherwise.
 */
export function isHotelReserved(reservations: ReservationT[], reservationRange: DateReservationT): boolean {
  if (isEmptyArray(reservations)) {
    return false;
  }

  const { startDate: startDateRange, endDate: endDateRange } = reservationRange;

  return reservations.some(({ dates: { startDate, endDate } }) =>
    isOneDateInRange(startDate, endDate, [startDateRange, endDateRange])
  );
}
