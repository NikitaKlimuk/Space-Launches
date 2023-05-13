import { Dispatch, SetStateAction } from "react";

export interface IPagination {
  setCurentPage: Dispatch<SetStateAction<number>>;
  totalPage: number;
  currentPage: number;
}
