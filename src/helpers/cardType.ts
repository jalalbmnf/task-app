import VISA from "assets/images/visa.png";
import MASTERCARD from "assets/images/master.png";

import { ECardType } from "./../enum/cardType";

export const setCardType = (type: ECardType) => {
  switch (type) {
    case ECardType.VISA:
      return VISA;
    case ECardType.MASTERCARD:
      return MASTERCARD;
  }
};
