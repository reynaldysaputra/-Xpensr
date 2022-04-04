import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ExpenseReducer } from './reducers/expenses';

const rootReducers = combineReducers({
  expenses: ExpenseReducer
})

const Store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware())
)

export type RootState = ReturnType<typeof rootReducers>;

export default Store;