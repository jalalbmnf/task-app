import Container from "components/Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-info-400">
      <Container>
        <nav className="flex justify-start gap-x-4 text-basic-100 font-semibold ">
          <Link to="/card">Cards</Link>
          <Link to="/transaction">Transactions</Link>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
