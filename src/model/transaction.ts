import { ECurrency } from "enum/currency";

export interface ITransaction {
  transactionId: string;
  cardAccount: string;
  cardId: string;
  amount: number;
  currency: ECurrency;
  transactionDate: string;
  merchantInfo: string;
}
