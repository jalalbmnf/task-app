import { FC } from "react";

import { ICard } from "model/card";
import { maskCardNumber } from "utils/mask";
import { setCardType } from "helpers/cardType";
import { ECardType } from "enum/cardType";
import { redirect } from "utils/route";

interface IProps {
  card: ICard;
}

const CardItem: FC<IProps> = ({ card }) => {
  const { cardType, cardId, cardExpiry, cardNumber, cardAccount } = card;

  const bgColor: string =
    cardType === ECardType.VISA ? "bg-basic-900" : "bg-warning-400";

  return (
    <div
      onClick={() => redirect(`card/${cardId}`)}
      className={` flex flex-col justify-between h-full px-6 py-8 rounded-lg cursor-pointer transition duration-150 ease-out ${bgColor} shadow-cardShadow`}
    >
      <div className="flex justify-between items-center">
        <div className="text-basic-200 text-left tracking-widest">
          {maskCardNumber(cardNumber)}
        </div>
        <div className="text-16 text-center text-basic-200">{cardExpiry}</div>
      </div>

      <div className="flex justify-between items-center mt-10">
        <div className="text-20 text-basic-100">{cardAccount}</div>
        <img src={`${setCardType(cardType)}`} alt="card" className="w-[40px]" />
      </div>
    </div>
  );
};

export default CardItem;
