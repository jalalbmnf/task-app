import { FC } from "react";

import { ITransaction } from "model/transaction";
import { Link } from "react-router-dom";

interface IProps {
  transaction: ITransaction;
}

const TransactionItem: FC<IProps> = ({ transaction }) => {
  const {
    transactionId,
    transactionDate,
    amount,
    cardAccount,
    cardId,
    currency,
    merchantInfo,
  } = transaction;

  return (
    <div className="w-full p-2 border-b border-basic-600">
      <table className="w-full">
        <thead className="w-full text-left">
          <tr className="w-full text-left">
            <th className="w-[16%]">Card account:</th>
            <th className="w-[14%]">Card ID:</th>
            <th className="w-[14%]">Transaction ID:</th>
            <th className="w-[16%]">Transaction date:</th>
            <th className="w-[19%]">Transaction amount:</th>
            <th className="w-[16%]">Merchant info:</th>
            <th className="w-full">Detail:</th>
          </tr>
        </thead>
        <tbody className="w-full text-left">
          <tr className="w-full text-left">
            <td className="text-basic-700 px-2 py-4 rounded-l-md w-[16%]">
              {cardAccount}
            </td>
            <td className="text-basic-700 px-2 py-4 w-[10%]">{cardId}</td>
            <td className="text-basic-700 px-2 py-4 w-[10%]">
              {transactionId}
            </td>
            <td className="text-basic-700 px-2 py-4 w-[16%]">
              {transactionDate}
            </td>
            <td className="text-basic-700 px-2 py-4 w-[16%]">
              {amount}
              {currency}
            </td>
            <td className="text-basic-700 py-4 rounded-r-md w-[16%]">
              {merchantInfo}
            </td>
            <td className="w-[16%]">
              <Link
                className="bg-success-400 p-2 text-basic-100 rounded-md"
                to={`/transaction/${transactionId}`}
              >
                Detail
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionItem;
