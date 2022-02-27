import { useParams } from "react-router-dom";

import Container from "components/Container";
import { cardSchema } from "data/cardSchema";
import { ICard } from "model/card";
import { maskCardNumber } from "utils/mask";
import { BreadCrumbItem, BreadCrumbList } from "components/BreadCrumb";
import { TransactionList } from "components/Transaction";

const CardInternal = () => {
  const { cardId } = useParams();

  const cardData = cardSchema.find((card: ICard) => card.cardId === cardId);

  const paths = [
    { title: "Cards", path: "/card" },
    {
      title: `Card ${cardId} details`,
      path: `/card/${cardId}`,
      icon: "/",
      active: true,
    },
  ];

  const {
    currency,
    cardType,
    balance,
    cardExpiry,
    cardNumber,
    cardAccount,
    status,
  }: any = cardData;

  return (
    <div className="h-screen bg-info-400">
      <Container>
        <div className="flex items-start justify-between">
          <h1 className="text-34 text-basic-900 font-semibold mb-8">
            Card details
          </h1>
          <BreadCrumbList>
            {paths.map(({ title, path, active, icon }, i: number) => (
              <BreadCrumbItem key={i} {...{ path, active, icon }}>
                {title}
              </BreadCrumbItem>
            ))}
          </BreadCrumbList>
        </div>
        <div className="flex justify-between gap-x-5">
          <div className="w-1/3 h-full p-5 rounded-xl bg-basic-100">
            <h2 className="pb-2 text-24 font-semibold text-basic-900 border-b border-basic-500">
              {cardAccount}
            </h2>
            <div className="flex flex-col gap-y-3 py-4">
              <div className="text-20 font-medium border-b border-basic-500 pb-2">
                Currency :
                <span className="text-24 text-basic-600"> {currency}</span>
              </div>
              <div className="text-20 font-medium border-b border-basic-500 pb-2">
                Balance :
                <span className="text-24 text-basic-600"> {balance}</span>
              </div>
              <div className="text-20 font-medium border-b border-basic-500 pb-2">
                Expired date:
                <span className="text-24 text-basic-600"> {cardExpiry}</span>
              </div>
              <div className="text-20 font-medium border-b border-basic-500 pb-2">
                Card number :
                <span className="text-24 text-basic-600">
                  {maskCardNumber(cardNumber)}
                </span>
              </div>
              <div className="text-20 font-medium border-b border-basic-500 pb-2">
                Card type :
                <span className="text-24 text-basic-600"> {cardType}</span>
              </div>
              <div className="text-20 font-medium border-b border-basic-500 pb-2">
                Status :
                <span
                  className={`text-24 ${
                    status === false ? "text-danger-600" : "text-success-600"
                  }`}
                >
                  {status === false ? " Blocked" : " Active"}
                </span>
              </div>
            </div>
          </div>
          <TransactionList />
        </div>
      </Container>
    </div>
  );
};

export default CardInternal;
