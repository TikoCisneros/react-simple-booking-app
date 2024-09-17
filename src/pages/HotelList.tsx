import { useQuery } from '@tanstack/react-query';
import { HStack } from '@chakra-ui/react';
import HotelCard from '../components/HotelCard';

import { fetchHotels } from '../api/hotels';

function HotelList() {
  const { data: hotels, isLoading, error } = useQuery({ queryKey: ['hotels'], queryFn: fetchHotels });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error fetching hotels! {error.message}</div>;

  return (
    <HStack margin="auto" width="100%" maxWidth="container.xl" justifyContent="center" flexWrap="wrap" gap={6}>
      {hotels?.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </HStack>
  );
}

export default HotelList;
