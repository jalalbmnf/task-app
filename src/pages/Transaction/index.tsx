import Container from "components/Container";
import { TransactionList } from "components/Transaction";

const Transaction = () => {
  return (
    <div className="bg-info-400">
      <Container>
        <TransactionList />
      </Container>
    </div>
  );
};

export default Transaction;
