export interface Order {
  customerId: string;
  items: {
    name: string;
    price: number;
    quantity: number;
  }[];
}
