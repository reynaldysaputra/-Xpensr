import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SEARCH_EXPENSE,
} from "../action-types/action-types";
import { ExpenseActions, ItemTypes } from "../types";

export const addExpense = (data: ItemTypes): ExpenseActions => {
  return {
    type: ADD_EXPENSE,
    data,
  };
};

export const deleteExpense = (data: ItemTypes): ExpenseActions => {
  return {
    type: DELETE_EXPENSE,
    data,
  };
};

export const searchExpense = (query: string): ExpenseActions => {
  return {
    type: SEARCH_EXPENSE,
    query,
  };
};