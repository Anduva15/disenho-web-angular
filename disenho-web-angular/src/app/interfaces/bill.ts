import { Client } from "./client";

export interface Bill {
    id: Number
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
