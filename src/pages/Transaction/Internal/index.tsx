import { useParams } from "react-router-dom";

import { transactionSchema } from "data/transactionSchema";
import { ITransaction } from "model/transaction";
import Container from "components/Container";
import { BreadCrumbList, BreadCrumbItem } from "components/BreadCrumb";
import { redirect } from "utils/route";

const TransactionInternal = () => {
  const { transactionId } = useParams();

  const transactionItemData = transactionSchema.find(
    (item: ITransaction) => item.transactionId === transactionId
  );

  const paths = [
    { title: "Transactions", path: "/transaction" },
    {
      title: `Transaction ${transactionId} details`,
      path: `/transactions/${transactionId}`,
      icon: "/",
      active: true,
    },
  ];

  return (
    <div className="h-screen bg-info-400">
      <Container>
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-34 text-basic-100 font-semibold">
            Transaction {transactionId} details
          </h2>
          <BreadCrumbList>
            {paths.map(({ title, path, icon, active }, i: number) => (
              <BreadCrumbItem key={i} {...{ path, icon, active }}>
                {title}
              </BreadCrumbItem>
            ))}
          </BreadCrumbList>
        </div>

        <div className="w-full bg-basic-100 p-4 rounded-md">
          <div className="flex justify-between items-center border-b border-b-basic-500">
            <div className="flex gap-x-3   p-4 ">
              <div className="text-basic-900 font-semibold">Card ID:</div>
              <div className="text-basic-700">
                {transactionItemData?.cardId}
              </div>
            </div>
            <button
              onClick={() => redirect(`/card/${transactionItemData?.cardId}`)}
              className="bg-success-500 text-20 text-basic-100 p-2 rounded-md"
            >
              Card
            </button>
          </div>

          <div className="flex gap-x-3 border-b border-b-basic-500 p-4">
            <div className="text-basic-900 font-semibold">Card account:</div>
            <div className="text-basic-700">
              {transactionItemData?.cardAccount}
            </div>
          </div>
          <div className="flex gap-x-3 border-b border-b-basic-500 p-4">
            <div className="text-basic-900 font-semibold">Currency:</div>
            <div className="text-basic-700">
              {transactionItemData?.currency}
            </div>
          </div>
          <div className="flex gap-x-3 border-b border-b-basic-500 p-4">
            <div className="text-basic-900 font-semibold">Merchant info:</div>
            <div className="text-basic-700">
              {transactionItemData?.merchantInfo}
            </div>
          </div>
          <div className="flex gap-x-3 border-b border-b-basic-500 p-4">
            <div className="text-basic-900 font-semibold">
              Transaction date:
            </div>
            <div className="text-basic-700">
              {transactionItemData?.transactionDate}
            </div>
          </div>
          <div className="flex gap-x-3 border-b border-b-basic-500 p-4">
            <div className="text-basic-900 font-semibold">Transaction ID:</div>
            <div className="text-basic-700">
              {transactionItemData?.transactionId}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TransactionInternal;
