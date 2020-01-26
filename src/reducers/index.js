import { combineReducers } from "redux";
import currencyExchange from './currencyExchange';
import uiInteractions from './uiInteractions';
import transactionDetails from './transactionDetails';

export default combineReducers({
  currencyExchange,
  uiInteractions,
  transactionDetails,
});
