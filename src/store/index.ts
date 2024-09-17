import { create, StateCreator } from 'zustand';
import { ReservationT } from '../models/reservation';
import { devtools } from 'zustand/middleware';

const STORE_NAME = 'booking-store' as const;
const STORE_ACTIONS_NAMES = {
  addReservation: 'add-reservation',
} as const;

type BookingStoreStateT = {
  reservations: ReservationT[];
  addReservation: (reservation: ReservationT) => void;
  /** Custom selectors */
  reservationsByHotelId: (hotelId: string) => ReservationT[];
};

const store: StateCreator<BookingStoreStateT, [['zustand/devtools', never]]> = (set, get) => ({
  reservations: [],
  addReservation(reservation) {
    set(
      (state) => ({
        reservations: [...state.reservations, reservation],
      }),
      false,
      STORE_ACTIONS_NAMES.addReservation
    );
  },
  reservationsByHotelId(hotelId: string) {
    return get().reservations.filter(({ hotel: { id } }) => id === hotelId);
  },
});

export const useBookingStore = create<BookingStoreStateT>()(devtools(store, { name: STORE_NAME }));
