import { HotelT } from '../models/hotel';

export async function fetchHotels(): Promise<HotelT[]> {
  const response = await fetch('http://localhost:3001/hotels');
  if (!response.ok) {
    throw new Error('Network response was not OK');
  }
  return response.json();
}

export async function fetchHotelById(id: string): Promise<HotelT> {
  const response = await fetch(`http://localhost:3001/hotels/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}
