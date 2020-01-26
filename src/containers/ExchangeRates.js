import { connect } from 'react-redux';
import ExchangeRates from '../components/exchange_rates/ExchangeRates';

const mapStateToProps = (state) => {
  console.log('state check', state);
  const { transactionDetails, currencyExchange } = state;
  let currentRate = transactionDetails.rate;
  let source = transactionDetails.source;
  let destination = transactionDetails.destination;

  
  return {
    currencyExchange,
    currentRate,
    source,
    destination
  }
};

const mapDispatchToProps = () => {

};

export default connect(
  mapStateToProps
)(ExchangeRates)