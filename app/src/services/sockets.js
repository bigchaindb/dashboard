import { validTransaction, updateStats, checkBlocks } from '../actions/actions';
import { getTransaction } from './bdb'
import bigchaindb from '../configs/bigchaindb.config.json'

let connected = false;
const protocol = bigchaindb.secure?'wss://':'ws://';

const setupSocket = (dispatch) => {

    const socket = new WebSocket(protocol + bigchaindb.host.split(':')[0]
                                +':'
                                +bigchaindb.ws_port
                                +bigchaindb.api
                                +bigchaindb.validTx)
  
    socket.onopen = () => {
      connected = true;
      dispatch(updateStats(connected, '---', '---'));
    }
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      getTransaction(data.transaction_id).then(txData => {
        dispatch(validTransaction(data.transaction_id, data.height, txData));
        dispatch(checkBlocks(data.height));
        dispatch(updateStats(connected, data.height));
      });
    }
    socket.onclose = () => {
      connected = false;
    }
  
    return socket
  }

export default setupSocket
