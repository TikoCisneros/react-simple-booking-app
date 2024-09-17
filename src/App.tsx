import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch } from 'wouter';
import HotelList from './pages/HotelList';
import HotelDetails from './pages/HotelDetails';
import MainLayout from './layouts/Main';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <MainLayout>
          <Switch>
            <Route path="/" component={HotelList} />
            <Route path="/hotel/:id" component={HotelDetails} />
          </Switch>
        </MainLayout>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
