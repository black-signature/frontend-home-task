export const actionTypes = {
  CREATE_POCKET: "CREATE_POCKET",
  REMOVE_POCKET: "REMOVE_POCKET",
  ADD_MONEY: "ADD_MONEY",
  SET_CURRENT_TRANSACTION_DETAILS: "SET_CURRENT_TRANSACTION_DETAILS",
  EXCHANGE: "EXCHANGE",
  UPDATE_FX_RATE: "UPDATE_FX_RATE"
};

export const uiActionTypes = {
  SET_POCKETS: "SET_POCKETS",
  SET_POLLING_STATUS: "SET_POLLING_STATUS",
  UPDATE_POCKETS: "UPDATE_POCKETS"
};

const pocketActions = {
  createPocket: (currency, symbol) => {
    return {
      type: actionTypes.CREATE_POCKET,
      currency,
      symbol,
    }
  },

  removePocket: (currency) => {
    return {
      type: actionTypes.REMOVE_POCKET,
      currency,
    }
  },

  addMoney: (currency, amount) => {
    return {
      type: actionTypes.ADD_MONEY,
      currency,
      amount,
    }
  },

  setCurrentTransactionDetails(source, destination, amount, rate) {
    return {
      type: actionTypes.SET_CURRENT_TRANSACTION_DETAILS,
      source,
      destination,
      amount,
      rate
    }
  },

  exchangeCurrency: (source, destination, amount, rate) => {
    return {
      type: actionTypes.EXCHANGE,
      source,
      destination,
      amount,
      rate
    }
  },

  updateFxRate: (currency, rate) => {
    return {
      type: actionTypes.UPDATE_FX_RATE,
      currency,
      rate,
    }
  }
};

const uiActions = {
  setInitialPockets: (source, destination) => {
    return {
      type: uiActionTypes.SET_POCKETS,
      source,
      destination,
    }
  },

  setPollingStatus: (status) => {
    return {
      type: uiActionTypes.SET_POLLING_STATUS,
      status
    }
  },

  updatePockets: (source, destination) => {
    return {
      type: uiActionTypes.UPDATE_POCKETS,
      source,
      destination
    }
  }
}

export default {
  actionTypes,
  uiActionTypes,
  pocketActions,
  uiActions
};