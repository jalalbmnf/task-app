import { useParams } from "react-router-dom";

import { transactionSchema } from "data/transactionSchema";
import { ITransaction } from "model/transaction";

import TransactionItem from "../Item";

const TransactionList = () => {
  const { cardId } = useParams();

  const transactionData = cardId
    ? transactionSchema.filter(
        (transaction: ITransaction) => transaction.cardId === cardId
      )
    : transactionSchema;

  return (
    <div className="rounded-lg w-full p-8 bg-basic-100">
      {transactionData.map((transaction: ITransaction, i: number) => (
        <TransactionItem key={i} {...{ transaction }} />
      ))}
    </div>
  );
};

export default TransactionList;
