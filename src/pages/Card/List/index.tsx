import { useState } from "react";

import { CardFilter } from "components/Filter";
import TransactionList from "components/Transaction/List";
import { cardSchema } from "data/cardSchema";
import { ICard } from "model/card";

import CardItem from "../Item";

const CardList = () => {
  const [value, setValue]: any = useState({
    cardId: null,
    cardAccount: null,
    currency: null,
    status: null,
  });

  const handleChange = (e: any, action: any) => {
    if (action.name === "cardId") {
      setValue({ cardId: e.value });
    }
    if (action.name === "cardAccount") {
      setValue({ cardAccount: e.value });
    }
    if (action.name === "currency") {
      setValue({ currency: e.value });
    }
    if (action.name === "status") {
      setValue({ status: e.value });
    }
  };

  const filteredData = cardSchema.filter((card: ICard) => {
    return (
      card.cardId === value.cardId ||
      card.cardAccount === value.cardAccount ||
      card.currency === value.currency ||
      card.status === value.status
    );
  });

  return (
    <div>
      <CardFilter {...{ value, setValue, handleChange }} />
      <div className="flex justify-between gap-x-4">
        <div className="w-1/4 h-full p-5 rounded-xl bg-basic-100">
          <h2 className="text-34 text-basic-1100 font-semibold text-center mb-5">
            Credit cards
          </h2>
          <div className="flex flex-col gap-y-6">
            {filteredData?.map((card: ICard, i: number) => (
              <CardItem key={i} {...{ card }} />
            ))}
          </div>
        </div>
        <TransactionList />
      </div>
    </div>
  );
};

export default CardList;
