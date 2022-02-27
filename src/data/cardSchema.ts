import { ECardType } from "enum/cardType";
import { ECurrency } from "enum/currency";

export const cardSchema = [
  {
    cardId: "1",
    cardAccount: "Manafi Jalal",
    cardNumber: "12345 6789 0123 0456",
    cardExpiry: "09/23",
    currency: ECurrency.EUR,
    status: true,
    balance: 300,
    cardType: ECardType.VISA,
  },
  {
    cardId: "2",
    cardAccount: "Huseynov Ramil",
    cardNumber: "4356 1235 7965 9867",
    cardExpiry: "10/22",
    currency: ECurrency.AZN,
    status: false,
    balance: 200,
    cardType: ECardType.MASTERCARD,
  },

  {
    cardId: "3",
    cardAccount: "Eliyev Vusal",
    cardNumber: "3334 6789 3435 8674",
    cardExpiry: "06/23",
    currency: ECurrency.USD,
    status: true,
    balance: 600,
    cardType: ECardType.VISA,
  },
];
