import { connect } from 'react-redux';
import { getFxRate } from '../lib/fxRates';
import actions from '../actions';
import ExchangeRates from '../components/exchange_rates/ExchangeRates';

const mapStateToProps = (state) => {
  const { transactionDetails, currencyExchange, uiInteractions } = state;

  let source = uiInteractions.source;
  let destination = uiInteractions.destination;
  let currentRate = transactionDetails.rate;

  return {
    uiInteractions,
    transactionDetails,
    currencyExchange,
    currentRate,
    source,
    destination
  }
};

const mapDispatchToProps = (dispatch) => ({
  pollFXData: async (source, destination) => {
    const currentFxRate = await getFxRate(source, destination);
    
    if (currentFxRate && currentFxRate['rates']) {
      dispatch(actions.pocketActions.updateFxRate(source, currentFxRate['rates'][destination]));
    }
  },

  setTransactionDetails: (source, destination, amount, rate = 0) => {
    dispatch(actions.pocketActions.setCurrentTransactionDetails(source, destination, amount, rate));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangeRates)