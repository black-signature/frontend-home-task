import { actionTypes } from '../actions';

const currencyExchange = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CREATE_POCKET: {
      const { currency, symbol } = action;
      if (state[currency]) {
        console.log(`Pocket already exists for ${currency}`);
        return state;
      }

      return {
        ...state,
        [currency]: {
          amount: 0,
          symbol,
        }
      }
    }

    case actionTypes.ADD_MONEY: {
      const { currency, amount } = action;
      if (!state[currency]) {
        console.log(`Pocket for ${currency} doesn't exist`);
        return state;
      }

      if (amount && amount > 0) {
        let topUpAmount = state[currency].amount + amount;
        let symbol = state[currency].symbol;
        return {
          ...state,
          [currency]: {
            amount: topUpAmount,
            symbol,
          }
        }
      }
      else {
        console.log('Topup amount should be more than zero');
        return state;
      }
    }

    case actionTypes.EXCHANGE: {
      const { source, destination, amount, rate } = action;
      let sourceCurrencyDetails = state[source];
      let destCurrencyDetails = state[destination];
      let newAmountInDest = destCurrencyDetails.amount + (amount * rate);
      let newAmountInSource = sourceCurrencyDetails.amount - amount;

      if (source === destination) {
        console.log('Source and destination cannot be same');
        return state;
      }

      if (amount === 0 || amount < 0) {
        console.log('Amount cannot be zero or negative');
        return state;
      }

      if (rate === 0 || rate < 0) {
        console.log('Rate cannot be zero or negative');
        return state;
      }

      if(newAmountInSource < 0) {
        console.log('Insufficient balance in source');
        return state;
      }

      return {
        ...state,
        [source]: {
          amount: newAmountInSource,
          symbol: sourceCurrencyDetails.symbol
        },
        [destination]: {
          amount: newAmountInDest,
          symbol: destCurrencyDetails.symbol
        },
      };
    }

    default:
      return state;
  }
};
export default currencyExchange;
