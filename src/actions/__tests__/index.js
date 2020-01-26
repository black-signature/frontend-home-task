import actions, { actionTypes as TYPES } from '../index';

const TESTED_TYPES = [
  'CREATE_POCKET',
  'REMOVE_POCKET',
  'ADD_MONEY',
  'EXCHANGE',
  'UPDATE_FX_RATE',
  'SET_CURRENT_TRANSACTION_DETAILS'
];

const TESTED_ACTIONS = [
  'createPocket',
  'removePocket',
  'addMoney',
  'exchangeCurrency',
  'setCurrentTransactionDetails',
  'updateFxRate'
];

it('should export all tested types', () => {
  expect(Object.keys(TYPES).sort()).toEqual(TESTED_TYPES.sort());
});

it('should export all tested actions', () => {
  expect(Object.keys(actions.pocketActions).sort()).toEqual(TESTED_ACTIONS.sort());
});

it('should show float value for addMoney action', () => {
  const validAction = {
    type: TYPES.ADD_MONEY,
    currency: 'EUR',
    amount: 10,
  };

  const action = actions.pocketActions.addMoney('EUR', '10');
  expect(action).toEqual(validAction);
});

it('should show float value for exchangeCurrency action', () => {
  const validAction = {
    type: TYPES.EXCHANGE,
    source: 'EUR',
    destination: 'USD',
    amount: 10,
    rate: 1.1,
  };

  const action = actions.pocketActions.exchangeCurrency('EUR', 'USD', '10', '1.1');
  expect(action).toEqual(validAction);
});
