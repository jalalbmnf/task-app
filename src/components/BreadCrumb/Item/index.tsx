import { FC } from "react";
import { NavLink } from "react-router-dom";
import { IPath } from "model/path";

const BreadCrumbItem: FC<IPath> = ({ path, children, active, icon }) => {
  return active ? (
    <li className="flex items-center gap-x-1">
      {!!icon && <span className="text-basic-900 text-16">{icon}</span>}
      <span className="text-basic-600">{children}</span>
    </li>
  ) : (
    <li className="flex items-center gap-x-1">
      {!!icon && <span className="text-basic-900 text-16">{icon}</span>}
      <NavLink to={path}>{children}</NavLink>
    </li>
  );
};

export default BreadCrumbItem;
