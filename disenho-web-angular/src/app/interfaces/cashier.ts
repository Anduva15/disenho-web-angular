export interface Cashier {
  id: number;
  registrationDate: Date;
  description: string;
  startingMoney: number;
  closingMoney: number;
  cashierOpeningDate: Date | null;
  cashierClosingDate: Date | null;
  restaurantId: string;
}
