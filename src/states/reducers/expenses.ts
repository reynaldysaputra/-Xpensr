import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from "../action-types/action-types"
import { dataItem, ExpenseActions, ItemTypes } from "../types"

const initialList = () => {
  const list = localStorage.getItem("expenseList");
  let expenseList: ItemTypes[] = [];
  
  if(list) {
    expenseList = JSON.parse(list);
  }

  return expenseList;
}

const initialState: dataItem = {
  expenseList: initialList(),
  query: ""
}

export function ExpenseReducer(state = initialState, action: ExpenseActions) {
  switch (action.type) {
    case ADD_EXPENSE:
      localStorage.setItem("expenseList", JSON.stringify([...state.expenseList, action.data]));
      return {
        ...state,
        expenseList: [...state.expenseList, action.data]
      }
    case DELETE_EXPENSE:
      const { data } = action;
      const updateList = state.expenseList.filter(
        item => item.createdAt !== data.createdAt
      )
      localStorage.setItem("expenseList", JSON.stringify(updateList));
      return {
        ...state,
        expenseList: updateList
      }
    case SEARCH_EXPENSE:
      const { query } = action
      return {
        ...state,
        query
      }
    default:
      return state
  }
}