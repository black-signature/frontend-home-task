import { actionTypes } from '../actions';

const initialValue = {
  source: null,
  destination: null,
  amount: 0,
  rate: 1,
};

const transactionDetails = (state = initialValue, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_TRANSACTION_DETAILS: {
      const { source, destination, amount, rate } = action;
      return {
        ...state,
        source,
        destination,
        amount,
        rate,
      };
    }

    case actionTypes.UPDATE_FX_RATE: {
      const { currency, rate } = action;
      return {
        ...state,
        currency,
        rate,
      };
    }

    default:
      return state;
  }
}
export default transactionDetails;
