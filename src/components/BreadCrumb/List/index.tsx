import { FC } from "react";

const BreadCrumbList: FC = ({ children }) => {
  return (
    <ul className="h-full flex items-center gap-x-1 p-3 rounded-md bg-basic-100">
      {children}
    </ul>
  );
};

export default BreadCrumbList;
