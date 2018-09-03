import bigchaindb from '../configs/bigchaindb.config.json'

const initialState = {
    connected: 'Disconnected',
    lastBlock: 0,
    totalTx: 0
}

const Stats = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_STATS':
      const connectionText = action.connected?'Connected to: '+ bigchaindb.host:'Disconnected';
      return Object.assign({}, {connected: connectionText, lastBlock: action.blockHeight, totalTx: action.totalTx});
    default:
      return state;
  }
}

export default Stats;