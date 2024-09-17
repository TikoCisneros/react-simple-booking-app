import { Button, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Link } from 'wouter';
import { HotelT } from '../models/hotel';

type HotelCardProps = {
  hotel: HotelT;
};

function HotelCard(props: HotelCardProps) {
  const { id, image, name, description } = props.hotel;

  return (
    <Card maxWidth="sm">
      <CardBody>
        <Image
          src={image}
          alt={name}
          sx={{
            height: 160,
            width: '100%',
            objectFit: 'cover',
          }}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex justifyContent="flex-end" flexGrow={1} flexShrink={1}>
          <Link href={`/hotel/${id}`}>
            <Button variant="solid" colorScheme="blue">
              See Details
            </Button>
          </Link>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default HotelCard;
