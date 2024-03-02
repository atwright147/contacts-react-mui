export interface Address {
  [key: string]: string | number;
  contactId: number;
  address1: string;
  address2: string;
  address3: string;
  city: string;
  county: string;
  postCode: string;
  isPrimary: number;
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const isAddress = (address: any): address is Address =>
  address.address1 && address.address2 && address.address3 && address.city && address.county && address.postCode;
