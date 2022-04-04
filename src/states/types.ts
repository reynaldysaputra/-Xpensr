import { categoriesType } from "../constants/add-expense";
import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from "./action-types/action-types";

export interface ItemTypes {
  title: string;
  logo?: string;
  createdAt: Date;
  amount: number | string;
  category: categoriesType;
}

export interface dataItem {
  expenseList: ItemTypes[];
  query: string;
}

export interface addExpense {
  type: typeof ADD_EXPENSE,
  data: ItemTypes
}

export interface deleteExpense {
  type: typeof DELETE_EXPENSE,
  data: ItemTypes 
}

export interface searchExpense {
  type: typeof SEARCH_EXPENSE,
  query: string
}

export type ExpenseActions = addExpense | deleteExpense | searchExpense;