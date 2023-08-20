import { Brand } from "./brand";

export interface Provider {
    id: String,
    name: String,
    firstName: String,
    lastName: String,
    officePhoneNumber: String,
    fax: String,
    mobileNumber: String,
    picture: String,
    address: String,
    brands: Array<Brand>,
}
