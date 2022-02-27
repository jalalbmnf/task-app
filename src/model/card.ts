import { ECardType } from "enum/cardType";
import { ECurrency } from "enum/currency";

export interface ICard {
  cardId: string;
  cardAccount: string;
  cardNumber: string;
  cardExpiry: string;
  currency: ECurrency;
  status: boolean;
  balance: number;
  cardType: ECardType;
}
