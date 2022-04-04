import { dataItem, ExpenseActions } from "../types"

const initialState: dataItem = {
  item: [],
  query: ""
}

export function ExpenseReducer(state = initialState, action: ExpenseActions) {
  switch (action.type) {
    default:
      return state
  }
}