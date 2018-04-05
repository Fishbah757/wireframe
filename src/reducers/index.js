import clientsArray from '../clients.json';

let initialState = {
  clients: clientsArray,
  currentClient: null
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_CLIENT':
      return {
        ...state,
        currentClient: action.client
      };
  
    default:
      return state;
  }
}

export default rootReducer;