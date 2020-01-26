import { connect } from 'react-redux';
import { getFxRate } from '../lib/fxRates';
import actions from '../actions'
import ExchangePocket from '../components/exchange_pocket/ExchangePocket';

const mapStateToProps = (state) => {
  const { currencyExchange, uiInteractions, transactionDetails } = state;
  let allCurrencies = Object.keys(currencyExchange);
  let pocketsPair = {
    source: uiInteractions.source,
    destination: uiInteractions.destination
  };

  return {
    currencyExchange,
    allCurrencies,
    pocketsPair,
    transactionDetails,
    uiInteractions,
  }
};

const mapDispatchToProps = (dispatch) => ({
  onInputChange: async (source, destination) => {
    const currentFxRate = await getFxRate(source, destination);
    if (currentFxRate && currentFxRate['rates']) {
      dispatch(actions.pocketActions.updateFxRate(source, currentFxRate['rates'][destination]));
    }
    else {
      console.log('Failed to load FX data. Please try again later');
    }
  },

  onSelectCurrency: async (sourceCurrency, destinationCurrency) => {
    dispatch(actions.uiActions.updatePockets(sourceCurrency, destinationCurrency));
    const currentFxRate = await getFxRate(sourceCurrency, destinationCurrency);

    if (currentFxRate && currentFxRate['rates']) {
      dispatch(actions.pocketActions.updateFxRate(sourceCurrency, currentFxRate['rates'][destinationCurrency]));
    }
    else {
      console.log('Failed to load FX data. Please try again later');
    }
  },

  setTransactionDetails: (source, destination, amount, rate) => {
    dispatch(actions.pocketActions.setCurrentTransactionDetails(source, destination, amount, rate));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangePocket);
