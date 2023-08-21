import { Client } from './client';

export interface Account {
  id: number; // MongoDB ObjectId
  totalAmount: number;
  clients: Array<Client>;
  entryDate: Date;
  exitDate: Date;
  reservationDate: Date;
  reservationId: string;
  bar: Boolean;
  restaurantId: string;
  status: string;
}
