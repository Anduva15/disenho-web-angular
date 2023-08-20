import { Client } from "./client";

export interface Account {
    id: String,
  totalAmount: Number,
  clients: Array<Client>,
  entryDate: Date,
  exitDate: Date,
  reservationDate: Date,
  reservationId: String,
  bar: Boolean,
  restaurantId: String,
  status: String,
}
