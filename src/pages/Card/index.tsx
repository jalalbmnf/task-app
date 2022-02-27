import Container from "components/Container";

import CardList from "./List";

const Card = () => {
  return (
    <div className="h-full bg-info-400">
      <Container>
        <CardList />
      </Container>
    </div>
  );
};

export default Card;
