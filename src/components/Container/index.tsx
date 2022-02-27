import { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const Container: FC<IProps> = ({ children }) => {
  return <div className="px-16 py-8">{children}</div>;
};

export default Container;
