import { useForm } from 'react-hook-form';
import { Alert, AlertIcon, AlertStatus, Button, Flex, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react';
import { HotelT } from '../models/hotel';
import { DateReservationT } from '../models/reservation';
import { isValid } from '../utils/common';
import { useBookingStore } from '../store';
import { isDateGreaterThan } from '../utils/date';
import { isHotelReserved } from './utils';

type BookingFormProps = {
  hotel: HotelT;
};

type FormData = DateReservationT;

function BookingForm({ hotel }: BookingFormProps) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const toast = useToast();

  const addReservation = useBookingStore((state) => state.addReservation);
  const reservationsByHotelId = useBookingStore((state) => state.reservationsByHotelId);

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <Flex flexDirection={{ base: 'column', sm: 'row' }} gap={4}>
        <FormControl isInvalid={isValid(errors.startDate)}>
          <FormLabel htmlFor="startDate">Start date:</FormLabel>
          <Input
            id="startDate"
            placeholder="Select start date"
            size="lg"
            type="date"
            {...register('startDate', { required: 'Start date is required', valueAsDate: true })}
          />
          {isValid(errors.startDate) && (
            <Alert status="error" marginTop={4}>
              <AlertIcon />
              {errors.startDate.message}
            </Alert>
          )}
        </FormControl>
        <FormControl isInvalid={isValid(errors.endDate)}>
          <FormLabel htmlFor="endDate">End date:</FormLabel>
          <Input
            id="endDate"
            placeholder="Select end date"
            size="lg"
            type="date"
            {...register('endDate', { required: 'End date is required', valueAsDate: true })}
          />
          {isValid(errors.endDate) && (
            <Alert status="error" marginTop={4}>
              <AlertIcon />
              {errors.endDate.message}
            </Alert>
          )}
        </FormControl>
      </Flex>
      <Flex justifyContent="flex-end">
        <Button variant="solid" colorScheme="blue" isLoading={isSubmitting} type="submit" marginTop={4}>
          Make reservation
        </Button>
      </Flex>
    </form>
  );

  function handleOnSubmit(dates: FormData) {
    const { startDate, endDate } = dates;

    if (!isDateGreaterThan(endDate, startDate)) {
      showToast('Reservation error!', 'Start date must be greater than End date', 'error');
      return;
    }

    const hotelReservations = reservationsByHotelId(hotel.id);

    if (isHotelReserved(hotelReservations, dates)) {
      showToast('Reservation warning!', 'Unfortunately the hotel is booked in this date range', 'warning');
      return;
    }

    addReservation({ hotel, dates });
    showToast('Reservation made!', `We've created a reservation at ${hotel.name}.`, 'success');
  }

  function showToast(title: string, description: string, status: AlertStatus) {
    toast({
      title,
      description,
      status,
      duration: 9000,
      isClosable: true,
      position: 'top',
    });
  }
}

export default BookingForm;
