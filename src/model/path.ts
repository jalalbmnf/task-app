import { ReactChild } from "react";

export interface IPath {
  path: string;
  children: ReactChild;
  active?: boolean;
  icon?: string;
}
