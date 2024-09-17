import { useQuery } from '@tanstack/react-query';
import { Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { useParams } from 'wouter';

import { fetchHotelById } from '../api/hotels';
import BookingForm from '../components/BookingForm';

function HotelDetails() {
  const { id } = useParams();

  const {
    data: hotel,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['hotel', id],
    queryFn: () => fetchHotelById(id!),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching Hotel! {error.message}</div>;
  }

  if (!hotel) return null;

  const { image, name, description } = hotel;

  return (
    <VStack margin="auto" width="100%" maxWidth="container.xl" gap={4}>
      <Heading size="xl">{name}</Heading>
      <Flex flexDirection={{ base: 'column', lg: 'row' }} gap={4}>
        <Image display="flex" flexGrow={1} src={image} alt={name} height={300} width="100%" objectFit="cover" />
        <Text display="flex" flexGrow={1}>
          {description}
        </Text>
      </Flex>
      <BookingForm hotel={hotel} />
    </VStack>
  );
}

export default HotelDetails;
