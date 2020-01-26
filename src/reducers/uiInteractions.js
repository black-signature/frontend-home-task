import { uiActionTypes } from '../actions';

const uiInteractions = (state = {}, action) => {
  switch (action.type) {
    case uiActionTypes.SET_POCKETS: {
      const { source, destination } = action;
      return {
        ...state,
        source,
        destination
      }
    }

    case uiActionTypes.SET_POLLING_STATUS: {
      const { status } = action;

      return {
        ...state,
        pollingStatus: status
      }
    }

    case uiActionTypes.UPDATE_POCKETS: {
      const { source, destination } = action;
      
      return {
        ...state,
        source,
        destination
      }
    }

    default: {
      return state;
    }
  }
};
export default uiInteractions;
