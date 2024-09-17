import { PropsWithChildren } from 'react';
import { Stack, Heading } from '@chakra-ui/react';
import { Link } from 'wouter';

function MainLayout({ children }: PropsWithChildren) {
  return (
    <Stack paddingX={10} paddingY={5} gap={10}>
      <Link href="/">
        <Heading color="blue.500">Booking App</Heading>
      </Link>
      {children}
    </Stack>
  );
}

export default MainLayout;
