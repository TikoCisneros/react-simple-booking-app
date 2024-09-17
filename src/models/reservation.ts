import { HotelT } from './hotel';

export type ReservationT = {
  hotel: HotelT;
  dates: DateReservationT;
};

export type DateReservationT = {
  startDate: Date;
  endDate: Date;
};
