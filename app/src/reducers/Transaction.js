const initialState = {}
const Transaction = (state = initialState, action) => {
  switch (action.type) {
    case 'VALID_TX_RECEIVED':
      if (!state.hasOwnProperty(action.blockId)){
        state[action.blockId] = {};
        state[action.blockId][action.txId] = action.raw;
      }else{
        state[action.blockId][action.txId] = action.raw;
      }
      return Object.assign({}, state, state);
    default:
      return state;
  }
}

export default Transaction;