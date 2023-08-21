export interface Cashier {
  id: number;
  registrationDate: string;
  description: string;
  startingMoney: number;
  closingMoney: number;
  cashierOpeningDate: Date;
  cashierClosingDate: Date;
  restaurantId: string;
}
