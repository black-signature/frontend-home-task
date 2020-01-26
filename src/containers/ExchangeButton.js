import { connect } from 'react-redux';
import actions from '../actions';
import ExchangeButton from '../components/exchange_button/ExchangeButton';

const mapStateToProps = (state) => {
  const { transactionDetails, uiInteractions } = state;
  let source = uiInteractions.source;
  let destination = uiInteractions.destination;
  let amount = transactionDetails.amount;
  let rate = transactionDetails.rate;

  return {
    source,
    destination,
    amount,
    rate
  };
};

const mapDispatchToProps = (dispatch) => ({
  onExchange: (source, destination, amount, rate) => {
    dispatch(actions.pocketActions.exchangeCurrency(source, destination, amount, rate));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangeButton);
