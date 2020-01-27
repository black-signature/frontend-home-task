import currencyExchange from '../currencyExchange';
import actions from '../../actions';

let state = undefined;

it('should return an empty initial state', () => {
  const validState = {};

  state = currencyExchange(state, { type: 'initial' });
  expect(state).toEqual(validState);
});

it('should create pocket', () => {
  const validState = {
    GBP: {
      amount: 0,
    },
  };

  state = currencyExchange({}, actions.pocketActions.createPocket('GBP'));
  expect(state).toEqual(validState);
});

it('should not create an existing pocket', () => {
  const validState = state;

  state = currencyExchange(state, actions.pocketActions.createPocket('GBP'));
  expect(state).toEqual(validState);
});

it('should add second pocket', () => {
  const validState = {
    ...state,
    USD: {
      amount: 0,
    },
  };

  state = currencyExchange(state, actions.pocketActions.createPocket('USD'));
  expect(state).toEqual(validState);
});

it('should add money to existing pocket', () => {
  const validState = {
    ...state,
    USD: {
      amount: 100,
    },
  };

  state = currencyExchange(state, actions.pocketActions.addMoney('USD', 100));
  expect(state).toEqual(validState);
});

it('should not add money to non-existing pocket', () => {
  const validState = state;

  state = currencyExchange(state, actions.pocketActions.addMoney('NON_EXISTENT', 100));
  expect(state).toEqual(validState);
});

it('should not add money to pocket with negative amount', () => {
  const validState = state;

  state = currencyExchange(state, actions.pocketActions.addMoney('USD', -100));
  expect(state).toEqual(validState);
});

it('should not exchange negative amount', () => {
  state = currencyExchange(state, actions.pocketActions.createPocket('GBP'));
  state = currencyExchange(state, actions.pocketActions.addMoney('GBP', 100));

  const validState = state;

  state = currencyExchange(state, actions.pocketActions.exchangeCurrency('GBP', 'USD', -10, 1));
  expect(state).toEqual(validState);
});

it('should not exchange with negative rate', () => {
  const validState = state;

  state = currencyExchange(state, actions.pocketActions.exchangeCurrency('GBP', 'USD', 10, -1));
  expect(state).toEqual(validState);
});

it('should exchange', () => {
  const amount = 10;
  const rate = 1.2;

  const validState = {
    ...state,
    USD: {
      amount: state.USD.amount + (amount * rate),
    },
    GBP: {
      amount: state.GBP.amount - amount,
    },
  };

  state = currencyExchange(state, actions.pocketActions.exchangeCurrency('GBP', 'USD', amount, rate));
  expect(state).toEqual(validState);
});
