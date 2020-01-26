import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import actions from './actions';
import reducers from './reducers';

import ExchangePage from './pages/ExchangePage';

const store = createStore(reducers);
function App() {
  /**
   * Initial data setup
   */
  store.dispatch(actions.pocketActions.createPocket('USD', '$'));
  store.dispatch(actions.pocketActions.createPocket('EUR', '€'));
  store.dispatch(actions.pocketActions.createPocket('GBP', '£'));
  store.dispatch(actions.pocketActions.createPocket('INR', '₹'));

  store.dispatch(actions.pocketActions.addMoney('USD', 500));
  store.dispatch(actions.pocketActions.addMoney('EUR', 500));
  store.dispatch(actions.pocketActions.addMoney('GBP', 500));
  store.dispatch(actions.pocketActions.addMoney('INR', 500));

  store.dispatch(actions.uiActions.setInitialPockets('USD', 'GBP'));
  store.dispatch(actions.uiActions.setPollingStatus(false)); // make this flag false to turn off auto polling fxrates

  return (
    <Provider store={store}>
      <ExchangePage />
    </Provider>
  );
}

export default App;
