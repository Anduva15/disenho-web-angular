export interface User {
  _id: string; // MongoDB ObjectId
  name: string;
  firstName: string;
  lastName: String;
  employeeId: String;
  phoneNumber1: String;
  phoneNumber2: String;
  login: String;
  password: String;
  isSystemAdmin: Boolean;
  isSecurityAdmin: Boolean;
  isRestaurantAdmin: Boolean;
  isAccountsAdmin: Boolean;
}
