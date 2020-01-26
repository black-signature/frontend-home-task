import { connect } from 'react-redux';
import { getFxRate } from '../lib/fxRates';
import actions from '../actions'
import ExchangePocket from '../components/exchange_pocket/ExchangePocket';

const PAUSE_TIME_AFTER_TYPING = 500;
let PAUSE_TIMEOUT_INSTANCE = null;

const mapStateToProps = (state) => {
  let allCurrencies = Object.keys(state.currencyExchange);
  let currencyExchange = state.currencyExchange;
  let pocketsPair = {
    source: state.uiInteractions.source,
    destination: state.uiInteractions.destination
  };

  return {
    currencyExchange,
    allCurrencies,
    pocketsPair
  }
};

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (source, destination) => {
    clearTimeout(PAUSE_TIMEOUT_INSTANCE);
    PAUSE_TIMEOUT_INSTANCE = setTimeout(async () => {
      const currentFxRate = await getFxRate(source, destination);
      if (currentFxRate && currentFxRate['rates']) {
        console.log(source, destination, currentFxRate['rates'][destination]);
        dispatch(actions.pocketActions.updateFxRate(source, currentFxRate['rates'][destination]));
      }
      else {
        console.log('Failed to load FX data. Please try again later');
      }
    }, PAUSE_TIME_AFTER_TYPING);
  },

  onSelectCurrency: async (sourceCurrency, destinationCurrency) => {
    dispatch(actions.uiActions.updatePockets(sourceCurrency, destinationCurrency));
    const currentFxRate = await getFxRate(sourceCurrency, destinationCurrency);

    if (currentFxRate && currentFxRate['rates']) {
      console.log(sourceCurrency, currentFxRate['rates'][destinationCurrency]);
      dispatch(actions.pocketActions.updateFxRate(sourceCurrency, currentFxRate['rates'][destinationCurrency]));
    }
    else {
      console.log('Failed to load FX data. Please try again later');
    }
  },

  setTransactionDetails: (source, destination, amount, rate = 1) => {
    dispatch(actions.pocketActions.setCurrentTransactionDetails(source, destination, amount, rate));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangePocket);
